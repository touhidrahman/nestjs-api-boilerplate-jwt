import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { S3ManagerModule } from 'src/s3-manager/s3-manager.module'
import { FileAssetController } from './file-asset.controller'
import { FileAssetService } from './file-asset.service'

@Module({
  imports: [S3ManagerModule],
  controllers: [FileAssetController],
  providers: [PrismaService, FileAssetService],
})
export class FileAssetModule {}
