import { HttpException, Injectable } from '@nestjs/common'
import { FileAsset } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { S3ManagerService } from 'src/s3-manager/s3-manager.service'

@Injectable()
export class FileAssetService {
  constructor(private prisma: PrismaService, private s3Manager: S3ManagerService) {}

  async listAllContent() {
    return this.s3Manager.listBucketContents()
  }

  async getOne(id: string) {
    return this.prisma.fileAsset.findFirst({ where: { id } })
  }

  async uploadFile(file: Express.Multer.File, folder: string): Promise<FileAsset> {
    const result = await this.s3Manager.uploadPublic(file, folder)
    const asset = await this.prisma.fileAsset.create({
      data: {
        name: result.Key,
        url: result.Location,
        size: file.size,
        mimetype: file.mimetype,
        bucket: result.Bucket,
      },
    })

    return asset
  }

  async uploadFiles(files: Array<Express.Multer.File>, folder: string): Promise<FileAsset[]> {
    const results: FileAsset[] = []
    for await(const file of files) {
        const item = await this.uploadFile(file, folder)
        results.push(item)
    }

    return results
  }

  async delete(id: string): Promise<FileAsset> {
    try {
      const asset = await this.prisma.fileAsset.findUnique({ where: { id } })
      if (!asset) throw new HttpException('File not found', 404)

      await this.prisma.fileAsset.delete({ where: { id: asset.id } })
      await this.s3Manager.deleteFile(asset?.name)
      return asset
    } catch (error: any) {
      throw new HttpException(error.message, 500)
    }
  }

  async deleteByUrl(url: string): Promise<FileAsset> {
    try {
      const asset = await this.prisma.fileAsset.findFirst({ where: { url: { equals: url } } })
      if (!asset) throw new HttpException('File not found', 404)

      await this.prisma.fileAsset.delete({ where: { id: asset.id } })
      await this.s3Manager.deleteFile(asset?.name)
      return asset
    } catch (error: any) {
      throw new HttpException(error.message, 500)
    }
  }
}
