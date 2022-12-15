import { Prisma } from '@prisma/client'
import { createPrismaRedisCache } from 'prisma-redis-middleware'
import { redisClient } from '../helpers/redis.helper'

export function prismaRedisMiddleware(): Prisma.Middleware {
  return createPrismaRedisCache({
    models: [
      { model: 'User', cacheTime: 60 },
      { model: 'FileAsset', cacheTime: 60 * 10 },
    ],
    storage: { type: 'redis', options: { client: redisClient, invalidation: true, log: console } },
    cacheTime: 300,
    onHit: (key) => {
      console.log('hit', key)
    },
    onMiss: (key) => {
      console.log('miss', key)
    },
    onError: (key) => {
      console.log('error', key)
    },
  })
}
