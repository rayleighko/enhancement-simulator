import { api, getGeneralApiProblem, handleProblem } from "~/libs/api"

type FetchOuidApi = () => Promise<any>

export const fetchOuidApi: FetchOuidApi = async () => {
  api.setAccessTokenInHeader()
  const res = await api.apisauce.get("/maplestory/v1/ouid")

  const problem = getGeneralApiProblem(res)
  await handleProblem(problem)
}
