import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { configureSwaggerDocs } from './helpers/configure-swagger-docs.helper'
import { PrismaService } from './prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('api')

  configureSwaggerDocs(app, configService)

  app.enableCors({
    origin: configService.get<string>('ENDPOINT_CORS'),
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  })
  const port = configService.get<number>('NODE_API_PORT') || 3000
  await app.listen(port)
  Logger.log(`Url for OpenApi: ${await app.getUrl()}/docs`, 'Swagger')
}

bootstrap()
