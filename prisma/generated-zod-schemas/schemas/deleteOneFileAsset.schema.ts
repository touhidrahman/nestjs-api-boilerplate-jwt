import { z } from 'zod'
import { FileAssetWhereUniqueInputObjectSchema } from './objects/FileAssetWhereUniqueInput.schema'

export const FileAssetDeleteOneSchema = z.object({ where: FileAssetWhereUniqueInputObjectSchema })
