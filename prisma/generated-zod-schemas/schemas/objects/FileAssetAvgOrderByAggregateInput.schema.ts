import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetAvgOrderByAggregateInput> = z
  .object({
    size: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FileAssetAvgOrderByAggregateInputObjectSchema = Schema
