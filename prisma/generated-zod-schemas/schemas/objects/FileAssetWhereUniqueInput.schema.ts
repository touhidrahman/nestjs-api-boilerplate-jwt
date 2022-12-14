import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileAssetWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const FileAssetWhereUniqueInputObjectSchema = Schema
