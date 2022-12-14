import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    url: z.string(),
    size: z.number(),
    mimetype: z.string(),
    bucket: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const FileAssetCreateInputObjectSchema = Schema
