import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma'
import { AppModule } from './app.module'
import { configureSwaggerDocs } from './app/helpers/configure-swagger-docs.helper'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  // enable shutdown hook. Handle Prisma shutdown signal to shutdown your Nest application.
  const prismaService: PrismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('api')

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

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
