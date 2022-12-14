import { z } from 'zod'
import { FileAssetWhereInputObjectSchema } from './objects/FileAssetWhereInput.schema'
import { FileAssetOrderByWithRelationInputObjectSchema } from './objects/FileAssetOrderByWithRelationInput.schema'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'
import { FileAssetScalarFieldEnumSchema } from './enums/FileAssetScalarFieldEnum.schema'

export const FileAssetFindFirstSchema = z.object({
  where: FileAssetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([FileAssetOrderByWithRelationInputObjectSchema, FileAssetOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: FileAssetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FileAssetScalarFieldEnumSchema).optional(),
})
