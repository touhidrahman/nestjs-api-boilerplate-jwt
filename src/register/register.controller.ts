import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common'
import { RegisterService } from './register.service'
import { RegisterUserDto } from './dto/register-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { EntityResponse } from 'src/interface'
import { User } from '@prisma/client'

@ApiTags('auth')
@Controller('auth/register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  public async register(@Body() registerUserDto: RegisterUserDto): Promise<EntityResponse<User | null>> {
    try {
      const result = await this.registerService.register(registerUserDto)

      return {
        message: 'User registration was successful',
        statusCode: HttpStatus.CREATED,
        data: result,
      }
    } catch (err: any) {
      return {
        message: 'Error: User registration not successful!',
        statusCode: HttpStatus.BAD_REQUEST,
        data: null,
      }
    }
  }
}
