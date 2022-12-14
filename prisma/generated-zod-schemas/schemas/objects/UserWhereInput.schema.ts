import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema'
import { GenderSchema } from '../enums/Gender.schema'
import { EnumUserRoleFilterObjectSchema } from './EnumUserRoleFilter.schema'
import { UserRoleSchema } from '../enums/UserRole.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    birthDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    registrationDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    disabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    bio: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    gender: z
      .union([z.lazy(() => EnumGenderNullableFilterObjectSchema), z.lazy(() => GenderSchema)])
      .optional()
      .nullable(),
    city: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    country: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), z.lazy(() => UserRoleSchema)]).optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
