import { HttpStatus } from '@nestjs/common'

export interface EntityResponse<T> {
  data: T
  statusCode: HttpStatus
  message?: string
  meta?: {
    total: number
    page: number
    size: number
    totalPages: number
  }
}
