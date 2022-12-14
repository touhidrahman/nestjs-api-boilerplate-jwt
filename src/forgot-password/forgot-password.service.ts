import { Injectable, NotFoundException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'
import { MailerService } from '../mailer/mailer.service'
import { UtilsService } from '../utils/utils.service'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
    private readonly utilsService: UtilsService,
  ) {}

  public async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<any> {
    const userUpdate = await this.prisma.user.findFirst({
      where: { email: forgotPasswordDto.email },
    })
    if (!userUpdate) {
      throw new NotFoundException(`User ${forgotPasswordDto.email} not found`)
    }
    const passwordRand = this.utilsService.generatePassword()
    const password = bcrypt.hashSync(passwordRand, 8)

    this.sendMailForgotPassword(userUpdate.email, passwordRand)

    return await this.prisma.user.update({
      where: { id: userUpdate.id },
      data: { password },
    })
  }

  private sendMailForgotPassword(email: string, password: string): void {
    this.mailerService
      .sendMail({
        to: email,
        from: 'from@example.com',
        subject: 'Forgot Password successful ✔',
        text: 'Forgot Password successful!',
        template: 'index',
        context: {
          title: 'Forgot Password successful!',
          description: 'Request Reset Password Successfully!  ✔, This is your new password: ' + password,
        },
      })
      .then((response) => {
        console.log(response)
        console.log('Forgot Password: Send Mail successfully!')
      })
      .catch((err) => {
        console.log(err)
        console.log('Forgot Password: Send Mail Failed!')
      })
  }
}
