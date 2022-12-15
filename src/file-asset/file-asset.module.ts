import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { S3ManagerModule } from 'src/s3-manager/s3-manager.module'
import { FileAssetController } from './file-asset.controller'
import { FileAssetService } from './file-asset.service'

@Module({
  imports: [S3ManagerModule, PrismaModule],
  controllers: [FileAssetController],
  providers: [FileAssetService],
})
export class FileAssetModule {}
