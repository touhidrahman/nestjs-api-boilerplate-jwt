import { z } from 'zod'
import { FileAssetCreateInputObjectSchema } from './objects/FileAssetCreateInput.schema'

export const FileAssetCreateOneSchema = z.object({ data: FileAssetCreateInputObjectSchema })
