import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common'
import { ApiConsumes, ApiTags } from '@nestjs/swagger'
import { FileAsset } from '@prisma/client'
import { ApiFile, ApiImageFile } from 'src/app/decorators/api-file.decorator'
import { ApiFiles } from 'src/app/decorators/api-files.decorator'
import { ParseFile } from 'src/app/pipes/parse-file.pipe'
import { APP_NAME } from 'src/app/values/app-name'
import { EntityResponse } from 'src/app/interface'
import { FileAssetService } from './file-asset.service'
import { snake } from 'radash'

@ApiTags('file-assets')
@Controller('file-assets')
export class FileAssetController {
  constructor(private fileAssetService: FileAssetService) {}

  @Get('bucket-contents')
  async listBucketContents() {
    return this.fileAssetService.listAllContent()
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('size', ParseIntPipe) size = 10,
  ): Promise<EntityResponse<FileAsset[]>> {
    const fileAssets = await this.fileAssetService.findAll(page, size)
    const count = await this.fileAssetService.count()
    return {
      data: fileAssets,
      statusCode: HttpStatus.OK,
      meta: {
        total: count,
        page,
        size,
        totalPages: Math.ceil(count / size),
      },
    }
  }

  @Post('avatar')
  @ApiConsumes('multipart/form-data')
  @ApiImageFile('avatar', true)
  async uploadAvatar(@UploadedFile(ParseFile) file: Express.Multer.File): Promise<EntityResponse<FileAsset | null>> {
    try {
      const result = await this.fileAssetService.uploadFile(file, `${snake(APP_NAME)}/avatars`)
      return {
        data: result,
        statusCode: HttpStatus.CREATED,
        message: 'File uploaded successfully',
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiFile('file')
  async uploadAsset(@UploadedFile(ParseFile) file: Express.Multer.File): Promise<EntityResponse<FileAsset | null>> {
    try {
      const result = await this.fileAssetService.uploadFile(file, `${snake(APP_NAME)}/public`)
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
  @ApiConsumes('multipart/form-data')
  @ApiFiles('files')
  async uploadAssets(@UploadedFiles(ParseFile) files: Array<Express.Multer.File>) {
    try {
      const result = await this.fileAssetService.uploadFiles(files, `${snake(APP_NAME)}/public`)
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
