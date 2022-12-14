import { z } from 'zod'
import { GenderSchema } from '../enums/Gender.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NullableEnumGenderFieldUpdateOperationsInput> = z
  .object({
    set: z
      .lazy(() => GenderSchema)
      .optional()
      .nullable(),
    unset: z.boolean().optional(),
  })
  .strict()

export const NullableEnumGenderFieldUpdateOperationsInputObjectSchema = Schema
