import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { MailerService } from '../mailer/mailer.service';
import { UsersService } from '../users/users.service';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class ChangePasswordService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
  ) {}

  public async changePassword(
    changePasswordDto: ChangePasswordDto,
  ): Promise<any> {
    const result = await this.usersService.updateByPassword(
      changePasswordDto.email,
      changePasswordDto.password,
    );

    this.sendMailChangePassword(result);

    return result;
  }

  private sendMailChangePassword(user: UserDto): void {
    this.mailerService
      .sendMail({
        to: user.email,
        from: 'from@example.com',
        subject: 'Change Password successful ✔',
        text: 'Change Password successful!',
        template: 'index',
        context: {
          title: 'Change Password successful!',
          description:
            'Change Password Successfully! ✔, This is your new password: ' +
            user.password,
          nameUser: user.firstName + ' ' + user.lastName,
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Change Password: Send Mail successfully!');
      })
      .catch((err) => {
        console.log(err);
        console.log('Change Password: Send Mail Failed!');
      });
  }
}
