import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FileAssetCountOrderByAggregateInputObjectSchema } from './FileAssetCountOrderByAggregateInput.schema'
import { FileAssetAvgOrderByAggregateInputObjectSchema } from './FileAssetAvgOrderByAggregateInput.schema'
import { FileAssetMaxOrderByAggregateInputObjectSchema } from './FileAssetMaxOrderByAggregateInput.schema'
import { FileAssetMinOrderByAggregateInputObjectSchema } from './FileAssetMinOrderByAggregateInput.schema'
import { FileAssetSumOrderByAggregateInputObjectSchema } from './FileAssetSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    mimetype: z.lazy(() => SortOrderSchema).optional(),
    bucket: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FileAssetCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => FileAssetAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FileAssetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FileAssetMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => FileAssetSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const FileAssetOrderByWithAggregationInputObjectSchema = Schema
