import "twin.macro"

import { Alert, AlertTitle, Box } from "~/components"

export const HomeView = () => (
  <Box tw="flex">
    <Alert severity="info" tw="mt-4">
      <AlertTitle>Hello 👋</AlertTitle>
      This app is enhancement simulator.
    </Alert>
  </Box>
)
