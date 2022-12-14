import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { NestedEnumGenderNullableFilterObjectSchema } from './NestedEnumGenderNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumGenderNullableFilter> = z
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
      .union([
        z.lazy(() => GenderSchema),
        z.lazy(() => NestedEnumGenderNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const EnumGenderNullableFilterObjectSchema = Schema;
