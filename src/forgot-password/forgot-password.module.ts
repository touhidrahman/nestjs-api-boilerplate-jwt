import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { MailerModule } from '../mailer/mailer.module'
import { UsersService } from '../users/users.service'
import { UtilsModule } from '../utils/utils.module'
import { ForgotPasswordController } from './forgot-password.controller'
import { ForgotPasswordService } from './forgot-password.service'

@Module({
  imports: [MailerModule, UtilsModule],
  providers: [PrismaService, ForgotPasswordService, UsersService],
  controllers: [ForgotPasswordController],
})
export class ForgotPasswordModule {}
