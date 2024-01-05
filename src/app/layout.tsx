"use client"

import { Box } from "~/components"
import { AppBar, SideMenu } from "~/components/layout"
import { ThemeRegistry } from "~/libs/styles"

const DRAWER_WIDTH = 240

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <Box component="html" lang="en">
    <Box component={"body"}>
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
        </Box>
      </ThemeRegistry>
    </Box>
  </Box>
)

export default RootLayout
