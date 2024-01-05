import { api, getGeneralApiProblem, handleProblem } from "~/libs/api"
import { GeneralApiProblem } from "~/libs/api/apiProblem.types"

type FetchOuidResponse = { ouid: string }
type FetchOuidApi = () => Promise<
  | { success: true; result: FetchOuidResponse }
  | { success: false; result: GeneralApiProblem<FetchOuidResponse> }
>

export const fetchOuidApi: FetchOuidApi = async () => {
  api.setAccessTokenInHeader()
  const res = await api.apisauce.get<FetchOuidResponse>("/maplestory/v1/ouid")

  if (!res.ok || !res.data) {
    const problem = getGeneralApiProblem(res)
    handleProblem(problem)

    return { success: false, result: problem }
  }

  return { success: true, result: res.data }
}
