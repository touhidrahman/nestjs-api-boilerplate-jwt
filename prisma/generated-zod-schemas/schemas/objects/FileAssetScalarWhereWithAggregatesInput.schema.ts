import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FileAssetScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FileAssetScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FileAssetScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FileAssetScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FileAssetScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    mimetype: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    bucket: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
  })
  .strict()

export const FileAssetScalarWhereWithAggregatesInputObjectSchema = Schema
