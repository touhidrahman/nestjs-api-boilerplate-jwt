import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'username',
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
]);
