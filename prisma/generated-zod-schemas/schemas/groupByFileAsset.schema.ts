import { z } from 'zod'
import { FileAssetWhereInputObjectSchema } from './objects/FileAssetWhereInput.schema'
import { FileAssetOrderByWithAggregationInputObjectSchema } from './objects/FileAssetOrderByWithAggregationInput.schema'
import { FileAssetScalarWhereWithAggregatesInputObjectSchema } from './objects/FileAssetScalarWhereWithAggregatesInput.schema'
import { FileAssetScalarFieldEnumSchema } from './enums/FileAssetScalarFieldEnum.schema'

export const FileAssetGroupBySchema = z.object({
  where: FileAssetWhereInputObjectSchema.optional(),
  orderBy: z.union([
    FileAssetOrderByWithAggregationInputObjectSchema,
    FileAssetOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: FileAssetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FileAssetScalarFieldEnumSchema),
})
