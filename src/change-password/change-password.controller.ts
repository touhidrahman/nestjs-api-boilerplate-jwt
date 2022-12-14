import {
  Controller,
  Post,
  Body,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ChangePasswordService } from '../change-password/change-password.service';
import { AuthGuard } from '@nestjs/passport';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@UseGuards(AuthGuard('jwt'))
@Controller('auth/change-password')
export class ChangePasswordController {
  constructor(private readonly changePasswordService: ChangePasswordService) {}

  @Post()
  public async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<any> {
    try {
      await this.changePasswordService.changePassword(changePasswordDto);

      return {
        message: 'Request Change Password Successfully!',
        status: HttpStatus.OK,
      };
    } catch (err) {
      return {
        message: 'Error: Change password failed!',
        status: HttpStatus.BAD_REQUEST,
        error: true,
      };
    }
  }
}
