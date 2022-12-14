import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    image: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    birthDate: z.boolean().optional(),
    registrationDate: z.boolean().optional(),
    disabled: z.boolean().optional(),
    bio: z.boolean().optional(),
    gender: z.boolean().optional(),
    city: z.boolean().optional(),
    country: z.boolean().optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
