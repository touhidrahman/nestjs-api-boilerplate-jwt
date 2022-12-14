import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { ThrottlerModule } from '@nestjs/throttler'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ChangePasswordModule } from './change-password/change-password.module'
import { ForgotPasswordModule } from './forgot-password/forgot-password.module'
import { LoginModule } from './login/login.module'
import { MailerModule } from './mailer/mailer.module'
import { PrismaService } from './prisma.service'
import { RegisterModule } from './register/register.module'
import { UsersModule } from './users/users.module'
import { UtilsModule } from './utils/utils.module'
import { FileAssetModule } from './file-asset/file-asset.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get<number>('THROTTLE_TTL'),
        limit: config.get<number>('THROTTLE_LIMIT'),
      }),
    }),
    LoginModule,
    RegisterModule,
    UsersModule,
    ForgotPasswordModule,
    ChangePasswordModule,
    MailerModule,
    UtilsModule,
    FileAssetModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    AppService,
    PrismaService,
  ],
})
export class AppModule {}
