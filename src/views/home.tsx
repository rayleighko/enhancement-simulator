import "twin.macro"

import { Alert, AlertTitle, Container } from "~/components"
import { Sample } from "~/components/Sample"

export const HomeView = () => (
  <Container tw="min-h-screen">
    <Alert severity="info" tw="mt-4">
      <AlertTitle>Hello 👋</AlertTitle>
      This app is enhancement simulator.
    </Alert>
    <Sample />
  </Container>
)
