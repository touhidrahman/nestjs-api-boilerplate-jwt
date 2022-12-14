import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetSumOrderByAggregateInput> = z
  .object({
    size: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FileAssetSumOrderByAggregateInputObjectSchema = Schema
