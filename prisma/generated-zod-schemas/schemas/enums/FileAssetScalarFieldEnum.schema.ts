import { z } from 'zod'

export const FileAssetScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'url',
  'size',
  'mimetype',
  'bucket',
  'createdAt',
  'updatedAt',
])
