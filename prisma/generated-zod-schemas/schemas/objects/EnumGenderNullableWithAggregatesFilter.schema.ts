import { z } from 'zod'
import { GenderSchema } from '../enums/Gender.schema'
import { NestedEnumGenderNullableWithAggregatesFilterObjectSchema } from './NestedEnumGenderNullableWithAggregatesFilter.schema'
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'
import { NestedEnumGenderNullableFilterObjectSchema } from './NestedEnumGenderNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumGenderNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => GenderSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => GenderSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => GenderSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([z.lazy(() => GenderSchema), z.lazy(() => NestedEnumGenderNullableWithAggregatesFilterObjectSchema)])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumGenderNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumGenderNullableFilterObjectSchema).optional(),
    isSet: z.boolean().optional(),
  })
  .strict()

export const EnumGenderNullableWithAggregatesFilterObjectSchema = Schema
