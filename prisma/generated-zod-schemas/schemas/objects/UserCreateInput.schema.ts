import { z } from 'zod'
import { GenderSchema } from '../enums/Gender.schema'
import { UserRoleSchema } from '../enums/UserRole.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    email: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    image: z.string().optional().nullable(),
    emailVerified: z.boolean().optional(),
    birthDate: z.date().optional().nullable(),
    disabled: z.boolean().optional(),
    bio: z.string().optional().nullable(),
    gender: z
      .lazy(() => GenderSchema)
      .optional()
      .nullable(),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    role: z.lazy(() => UserRoleSchema).optional(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
