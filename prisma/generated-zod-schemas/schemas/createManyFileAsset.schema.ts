import { z } from 'zod'
import { FileAssetCreateManyInputObjectSchema } from './objects/FileAssetCreateManyInput.schema'

export const FileAssetCreateManySchema = z.object({ data: FileAssetCreateManyInputObjectSchema })
