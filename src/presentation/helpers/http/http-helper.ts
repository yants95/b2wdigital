import { HttpResponse } from "@/presentation/protocols/http";

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: 'ServerError'
})