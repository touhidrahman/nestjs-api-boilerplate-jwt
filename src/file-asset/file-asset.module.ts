import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileAssetController } from './file-asset.controller';
import { FileAssetService } from './file-asset.service';

@Module({
  controllers: [FileAssetController],
  providers: [PrismaService, FileAssetService]
})
export class FileAssetModule {}
