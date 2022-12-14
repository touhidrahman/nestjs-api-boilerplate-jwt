import { createZodDto } from 'nestjs-zod'
import { UserCreateInputObjectSchema } from 'prisma/generated-zod-schemas/schemas/objects/UserCreateInput.schema'

export class UserDto extends createZodDto(UserCreateInputObjectSchema) {}
