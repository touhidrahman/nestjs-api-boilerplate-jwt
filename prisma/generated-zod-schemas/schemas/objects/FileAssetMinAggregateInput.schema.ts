import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    url: z.literal(true).optional(),
    size: z.literal(true).optional(),
    mimetype: z.literal(true).optional(),
    bucket: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const FileAssetMinAggregateInputObjectSchema = Schema
