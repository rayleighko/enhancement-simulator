import { ApiResponse } from "apisauce"

import { GeneralApiProblem } from "./apiProblem.types"

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export const getGeneralApiProblem = <T = unknown>(
  response: ApiResponse<T>,
): GeneralApiProblem<T> => {
  const { problem, data } = response
  switch (problem) {
    case "CONNECTION_ERROR":
      return {
        kind: "cannot-connect",
        temporary: true,
        data,
      }
    case "NETWORK_ERROR":
      return { kind: "cannot-connect", temporary: true, data }
    case "TIMEOUT_ERROR":
      return { kind: "timeout", temporary: true, data }
    case "SERVER_ERROR":
      return { kind: "server", data }
    case "UNKNOWN_ERROR":
      return { kind: "unknown", temporary: true, data }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return { kind: "unauthorized", data }
        case 403:
          return { kind: "forbidden", data }
        case 404:
          return { kind: "not-found", data }
        default:
          return { kind: "rejected", data }
      }
    case "CANCEL_ERROR":
      return { kind: "cancel", data }
  }
  return { kind: "unknown", temporary: true, data }
}
