import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EntityResponse } from 'src/interface';
import { ForgotPasswordService } from '../forgot-password/forgot-password.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

@ApiTags('auth')
@Controller('auth/forgot-password')
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @Post()
  public async forgotPassword(
    @Body() forgotPasswordDto: ForgotPasswordDto,
  ): Promise<EntityResponse<null>> {
    try {
      await this.forgotPasswordService.forgotPassword(forgotPasswordDto);

      return {
        message: 'Reset Password Request Successful!',
        statusCode: HttpStatus.OK,
        data: null,
      }
    } catch (err) {
      return {
        message: 'Error: Forgot password request failed!',
        statusCode: HttpStatus.BAD_REQUEST,
        data: null,
      };
    }
  }
}
