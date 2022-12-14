import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'
import { S3ManagerService } from 'src/s3-manager/s3-manager.service'

@ApiTags('file-assets')
@Controller('file-assets')
export class FileAssetController {
  constructor(private s3: S3ManagerService) {}

  @Get()
  async listBucketContents() {
    return this.s3.listBucketContents()
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await this.s3.uploadPublic(file, 'nestjs-prisma-starter')
    return result
  }
}
