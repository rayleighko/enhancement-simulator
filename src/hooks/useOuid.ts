import { useQuery } from "react-query"

import { fetchOuidApi } from "~/apis"

export const useOuid = () => {
  const { status, data, error, isFetching } = useQuery("ouid", fetchOuidApi)

  return { status, data, error, isFetching }
}
