import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FileAssetService {
    constructor(private prisma: PrismaService) {}
}
