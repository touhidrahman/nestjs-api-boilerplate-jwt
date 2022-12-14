import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => FileAssetWhereInputObjectSchema), z.lazy(() => FileAssetWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => FileAssetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => FileAssetWhereInputObjectSchema), z.lazy(() => FileAssetWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    size: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    mimetype: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    bucket: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict()

export const FileAssetWhereInputObjectSchema = Schema
