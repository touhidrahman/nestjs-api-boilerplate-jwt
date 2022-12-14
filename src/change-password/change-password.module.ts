import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { MailerModule } from '../mailer/mailer.module'
import { UsersService } from '../users/users.service'
import { ChangePasswordController } from './change-password.controller'
import { ChangePasswordService } from './change-password.service'

@Module({
  imports: [MailerModule],
  controllers: [ChangePasswordController],
  providers: [PrismaService, ChangePasswordService, UsersService],
})
export class ChangePasswordModule {}
