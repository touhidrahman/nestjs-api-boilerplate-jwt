import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    image: z.string().optional().nullable(),
    emailVerified: z.boolean().optional(),
    birthDate: z.date().optional().nullable(),
    registrationDate: z.date().optional(),
    disabled: z.boolean().optional(),
    bio: z.string().optional().nullable(),
    gender: z
      .lazy(() => GenderSchema)
      .optional()
      .nullable(),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
