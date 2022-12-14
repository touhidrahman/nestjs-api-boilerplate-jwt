import { z } from 'zod'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'

export const FileAssetFindUniqueSchema = z.object({ where: FileAssetWhereUniqueInputObjectSchema })
