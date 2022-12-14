import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    username: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    image: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    birthDate: z.literal(true).optional(),
    registrationDate: z.literal(true).optional(),
    disabled: z.literal(true).optional(),
    bio: z.literal(true).optional(),
    gender: z.literal(true).optional(),
    city: z.literal(true).optional(),
    country: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
