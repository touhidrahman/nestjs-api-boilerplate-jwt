import { z } from 'zod'
import { FileAssetWhereInputObjectSchema } from './objects/FileAssetWhereInput.schema'

export const FileAssetDeleteManySchema = z.object({ where: FileAssetWhereInputObjectSchema.optional() })
