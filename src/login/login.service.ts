import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt.payload';

@Injectable()
export class LoginService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private async validate(loginDto: LoginDto): Promise<User> {
    return await this.usersService.findByEmail(loginDto.email);
  }

  public async login(
    loginDto: LoginDto,
  ): Promise<any | { status: number; message: string }> {
    return this.validate(loginDto)
      .then((userData) => {
        if (!userData) {
          throw new UnauthorizedException();
        }

        const passwordIsValid = bcrypt.compareSync(
          loginDto.password,
          userData.password,
        );

        if (!passwordIsValid == true) {
          return {
            message: 'Authentication failed. Wrong password',
            status: HttpStatus.BAD_REQUEST,
          };
        }

        const payload = {
          name: userData.firstName + '' + userData.lastName,
          email: userData.email,
          id: userData.id,
        };

        const accessToken = this.jwtService.sign(payload);

        return {
          expiresIn: 3600,
          accessToken: accessToken,
          user: payload,
          status: HttpStatus.OK,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  public async validateUserByJwt(payload: JwtPayload) {
    // This will be used when the user has already logged in and has a JWT
    const user = await this.usersService.findByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return this.createJwtPayload(user);
  }

  protected createJwtPayload(user: Partial<UserDto>) {
    const data: JwtPayload = {
      email: user.email ?? '',
      id: user.id ?? ''
    };

    const jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt,
    };
  }
}
