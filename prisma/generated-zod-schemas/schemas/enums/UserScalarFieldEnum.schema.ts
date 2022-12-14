import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'email',
  'password',
  'firstName',
  'lastName',
  'image',
  'emailVerified',
  'birthDate',
  'registrationDate',
  'disabled',
  'bio',
  'gender',
  'city',
  'country',
  'role',
])
