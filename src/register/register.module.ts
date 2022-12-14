import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MailerModule } from '../mailer/mailer.module';
import { UsersService } from '../users/users.service';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [MailerModule],
  controllers: [RegisterController],
  providers: [PrismaService, RegisterService, UsersService],
})
export class RegisterModule {}
