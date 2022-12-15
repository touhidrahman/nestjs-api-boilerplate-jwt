import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { UserProfileDto } from './dto/user-profile.dto'
import { UserUpdateDto } from './dto/user-update.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      take: 10,
    })
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    if (!user) {
      throw new NotFoundException(`User ${email} not found`)
    }

    return user
  }

  public async findById(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new NotFoundException(`User #${userId} not found`)
    }

    return user
  }

  public async create(userDto: Prisma.UserCreateInput): Promise<User> {
    try {
      const result = await this.prisma.user.create({ data: userDto })
      return { ...result, password: '' }
    } catch (err: any) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  public async updateByEmail(email: string): Promise<User> {
    try {
      const user = await this.prisma.user.findFirst({ where: { email } })
      if (!user) throw new NotFoundException(`User ${email} not found`)

      user.password = bcrypt.hashSync(Math.random().toString(36).slice(-8), 8)

      return await this.prisma.user.update({ where: { email }, data: user })
    } catch (err: any) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  public async updateByPassword(email: string, password: string): Promise<User> {
    try {
      const user = await this.prisma.user.findFirst({ where: { email } })
      if (!user) throw new NotFoundException(`User ${email} not found`)

      user.password = bcrypt.hashSync(password, 8)

      return await this.prisma.user.update({ where: { email }, data: user })
    } catch (err: any) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  public async updateProfileUser(id: string, userProfileDto: UserProfileDto): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } })
      if (!user) throw new NotFoundException(`User #${id} not found`)

      return await this.prisma.user.update({ where: { id }, data: { ...userProfileDto } })
    } catch (err: any) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  public async updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: userUpdateDto,
      })

      if (!user) {
        throw new NotFoundException(`User #${id} does not exist`)
      }

      return user
    } catch (err: any) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  public async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}
