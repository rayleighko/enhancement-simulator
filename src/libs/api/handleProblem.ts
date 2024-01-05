import { GeneralApiProblem } from "./apiProblem.types"

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export const handleProblem = (problem?: GeneralApiProblem): void => {
  if (!problem) return
  switch (problem.kind) {
    case "unauthorized":
    case "bad-data":
    case "cannot-connect":
    case "forbidden":
    case "not-found":
    case "rejected":
    case "server":
    case "timeout":
    case "unknown":
      throw problem
  }
}
