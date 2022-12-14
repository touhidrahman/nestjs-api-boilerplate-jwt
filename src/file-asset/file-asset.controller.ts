import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'
import { FileAsset } from '@prisma/client'
import { EntityResponse } from 'src/interface'
import { FileAssetService } from './file-asset.service'

@ApiTags('file-assets')
@Controller('file-assets')
export class FileAssetController {
  constructor(private fileAssetService: FileAssetService) {}

  @Get()
  async listBucketContents() {
    return this.fileAssetService.listAllContent()
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadAsset(@UploadedFile() file: Express.Multer.File): Promise<EntityResponse<FileAsset | null>> {
    try {
      const result = await this.fileAssetService.uploadFile(file, 'nestjs-prisma-starter')
      return {
        data: result,
        statusCode: HttpStatus.CREATED,
        message: 'File uploaded successfully',
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files')) // 👈  using FilesInterceptor here
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array', // 👈  array of files
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  async uploadAssets(@UploadedFiles() files: Array<Express.Multer.File>) {
    try {
      const result = await this.fileAssetService.uploadFiles(files, 'nestjs-prisma-starter')
      return {
        data: result,
        statusCode: HttpStatus.CREATED,
        message: 'Files uploaded successfully',
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':assetId')
  async deleteAsset(@Param('asssetId') assetId: string): Promise<EntityResponse<FileAsset>> {
    try {
      const result = await this.fileAssetService.delete(assetId)
      return {
        data: result,
        statusCode: HttpStatus.OK,
        message: 'File deleted successfully',
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('delete-by-url')
  async deleteAssetByUrl(@Body() data: { url: string }): Promise<EntityResponse<FileAsset>> {
    try {
      const result = await this.fileAssetService.deleteByUrl(data.url)
      return {
        data: result,
        statusCode: HttpStatus.OK,
        message: 'File deleted successfully',
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
