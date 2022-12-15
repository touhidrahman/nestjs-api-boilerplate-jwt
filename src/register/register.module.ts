import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { MailerModule } from '../mailer/mailer.module'
import { UsersService } from '../users/users.service'
import { RegisterController } from './register.controller'
import { RegisterService } from './register.service'

@Module({
  imports: [MailerModule, PrismaModule],
  controllers: [RegisterController],
  providers: [RegisterService, UsersService],
})
export class RegisterModule {}
