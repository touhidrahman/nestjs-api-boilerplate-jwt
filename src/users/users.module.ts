import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MailerModule } from '../mailer/mailer.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MailerModule],
  controllers: [UsersController],
  providers: [PrismaService, UsersService],
})
export class UsersModule {}
