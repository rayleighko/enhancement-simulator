import { Box } from "~/components"
import { useOuid } from "~/hooks/useOuid"

export const Sample = () => {
  const { data } = useOuid()

  if (!data) return null
  if (!data.success) return null

  return <Box>ouid: {data.result.ouid}</Box>
}
