import { z } from 'zod'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'
import { FileAssetCreateInputObjectSchema } from './objects/FileAssetCreateInput.schema'
import { FileAssetUpdateInputObjectSchema } from './objects/FileAssetUpdateInput.schema'

export const FileAssetUpsertSchema = z.object({
  where: FileAssetWhereUniqueInputObjectSchema,
  create: FileAssetCreateInputObjectSchema,
  update: FileAssetUpdateInputObjectSchema,
})
