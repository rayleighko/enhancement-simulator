/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */

import { AxiosRequestConfig } from "axios"

export type ApiRequestParams<P = Record<string, unknown>> = P
export type ApiRequestBody<B = Record<string, unknown>> = B

export type ApiRequest = {
  config: AxiosRequestConfig
}
export type ApiResponse<D = Record<string, unknown>> = {
  status?: number
  data?: D
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
