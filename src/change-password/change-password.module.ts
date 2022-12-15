import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { MailerModule } from '../mailer/mailer.module'
import { UsersService } from '../users/users.service'
import { ChangePasswordController } from './change-password.controller'
import { ChangePasswordService } from './change-password.service'

@Module({
  imports: [MailerModule, PrismaModule],
  controllers: [ChangePasswordController],
  providers: [ChangePasswordService, UsersService],
})
export class ChangePasswordModule {}
