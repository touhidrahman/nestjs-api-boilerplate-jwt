import { z } from 'zod'
import { UserRoleSchema } from '../enums/UserRole.schema'
import { NestedEnumUserRoleFilterObjectSchema } from './NestedEnumUserRoleFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumUserRoleFilter> = z
  .object({
    equals: z.lazy(() => UserRoleSchema).optional(),
    in: z
      .lazy(() => UserRoleSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => UserRoleSchema)
      .array()
      .optional(),
    not: z.union([z.lazy(() => UserRoleSchema), z.lazy(() => NestedEnumUserRoleFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumUserRoleFilterObjectSchema = Schema
