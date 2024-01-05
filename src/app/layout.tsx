"use client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { Box } from "~/components"
import { AppBar, Footer, SideMenu } from "~/components/layout"
import { ThemeRegistry } from "~/libs/styles"

const DRAWER_WIDTH = 240
// Create a client
const queryClient = new QueryClient()

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <Box component="html" lang="en">
    <Box component={"body"}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeRegistry>
          <AppBar />
          <SideMenu />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}>
            {children}
            <Footer />
          </Box>
        </ThemeRegistry>
      </QueryClientProvider>
    </Box>
  </Box>
)

export default RootLayout
