import {
  Body, Controller, Delete, Get, HttpStatus,
  NotFoundException, Param, Put, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { EntityResponse } from 'src/interface';
import { UserProfileDto } from './dto/user-profile.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async findAllUser(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:userId')
  public async findOneUser(@Param('userId') userId: string): Promise<EntityResponse<User>> {
    const user = await this.usersService.findById(userId);

    return {
      data: { ...user, password: '' },
      statusCode: HttpStatus.OK,
    }
  }

  @Get('/:userId/profile')
  public async getUser(
    @Param('userId') userId: string,
  ): Promise<EntityResponse<User>> {
    const user = await this.usersService.findById(userId);

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    return {
      data: user,
      statusCode: HttpStatus.OK,
    };
  }

  @Put('/:userId/profile')
  public async updateProfileUser(
    @Param('userId') userId: string,
    @Body() userProfileDto: UserProfileDto,
  ): Promise<EntityResponse<null>> {
    try {
      await this.usersService.updateProfileUser(userId, userProfileDto);

      return {
        message: 'User Updated successfully!',
        statusCode: HttpStatus.OK,
        data: null,
      };
    } catch (err: any) {
      return {
        message: 'Error: User not updated!',
        statusCode: HttpStatus.BAD_REQUEST,
        data: null,
      };
    }
  }

  @Put('/:userId')
  public async updateUser(
    @Param('userId') userId: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<EntityResponse<null>> {
    try {
      await this.usersService.updateUser(userId, userUpdateDto);

      return {
        message: 'User Updated successfully!',
        statusCode: HttpStatus.OK,
        data: null,
      }
    } catch (err) {
      return {
        message: 'Error: User not updated!',
        statusCode: HttpStatus.BAD_REQUEST,
        data: null,
      };
    }
  }

  @Delete('/:userId')
  public async deleteUser(@Param('userId') userId: string): Promise<EntityResponse<User>> {
    const user = await this.usersService.deleteUser(userId);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return {
      message: 'User has been deleted',
      statusCode: HttpStatus.OK,
      data: user,
    };
  }
}
