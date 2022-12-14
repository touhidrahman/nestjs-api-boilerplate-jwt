import { z } from 'zod'
import { FileAssetUpdateManyMutationInputObjectSchema } from './objects/FileAssetUpdateManyMutationInput.schema'
import { FileAssetWhereInputObjectSchema } from './objects/FileAssetWhereInput.schema'

export const FileAssetUpdateManySchema = z.object({
  data: FileAssetUpdateManyMutationInputObjectSchema,
  where: FileAssetWhereInputObjectSchema.optional(),
})
