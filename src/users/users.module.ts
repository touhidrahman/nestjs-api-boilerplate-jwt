import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { MailerModule } from '../mailer/mailer.module'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  imports: [MailerModule, PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
