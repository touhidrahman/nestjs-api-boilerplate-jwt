import { z } from 'zod'
import { FileAssetWhereInputObjectSchema } from './objects/FileAssetWhereInput.schema'
import { FileAssetOrderByWithRelationInputObjectSchema } from './objects/FileAssetOrderByWithRelationInput.schema'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'
import { FileAssetCountAggregateInputObjectSchema } from './objects/FileAssetCountAggregateInput.schema'
import { FileAssetMinAggregateInputObjectSchema } from './objects/FileAssetMinAggregateInput.schema'
import { FileAssetMaxAggregateInputObjectSchema } from './objects/FileAssetMaxAggregateInput.schema'
import { FileAssetAvgAggregateInputObjectSchema } from './objects/FileAssetAvgAggregateInput.schema'
import { FileAssetSumAggregateInputObjectSchema } from './objects/FileAssetSumAggregateInput.schema'

export const FileAssetAggregateSchema = z.object({
  where: FileAssetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([FileAssetOrderByWithRelationInputObjectSchema, FileAssetOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: FileAssetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), FileAssetCountAggregateInputObjectSchema]).optional(),
  _min: FileAssetMinAggregateInputObjectSchema.optional(),
  _max: FileAssetMaxAggregateInputObjectSchema.optional(),
  _avg: FileAssetAvgAggregateInputObjectSchema.optional(),
  _sum: FileAssetSumAggregateInputObjectSchema.optional(),
})
