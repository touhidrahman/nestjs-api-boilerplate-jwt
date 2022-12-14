import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { UserDto } from 'src/users/dto/user.dto'
import { MailerService } from '../mailer/mailer.service'
import { UsersService } from '../users/users.service'
import { RegisterUserDto } from './dto/register-user.dto'

@Injectable()
export class RegisterService {
  constructor(private readonly usersService: UsersService, private readonly mailerService: MailerService) {}

  public async register(registerUserDto: RegisterUserDto): Promise<User> {
    registerUserDto.password = bcrypt.hashSync(registerUserDto.password, 8)

    this.sendMailRegisterUser(registerUserDto)

    return this.usersService.create(registerUserDto)
  }

  private sendMailRegisterUser(user: UserDto): void {
    this.mailerService
      .sendMail({
        to: user.email,
        from: 'from@example.com',
        subject: 'Registration successful ✔',
        text: 'Registration successful!',
        template: 'index',
        context: {
          title: 'Registration successfully',
          description: "You did it! You registered!, You're successfully registered.✔",
          nameUser: user.firstName + ' ' + user.lastName,
        },
      })
      .then((response) => {
        console.log(response)
        console.log('User Registration: Send Mail successfully!')
      })
      .catch((err) => {
        console.log(err)
        console.log('User Registration: Send Mail Failed!')
      })
  }
}
