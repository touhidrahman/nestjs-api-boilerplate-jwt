import { z } from 'zod'
import { FileAssetUpdateInputObjectSchema } from './objects/FileAssetUpdateInput.schema'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'

export const FileAssetUpdateOneSchema = z.object({
  data: FileAssetUpdateInputObjectSchema,
  where: FileAssetWhereUniqueInputObjectSchema,
})
