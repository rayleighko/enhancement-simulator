import { AppBar as MuiAppBar, Toolbar, Typography } from "~/components"
import { DashboardIcon } from "~/icons"

const AppBar = () => {
  return (
    <MuiAppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <DashboardIcon
          sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
        />
        <Typography variant="h6" color="text.primary">
          Enhancement Simulator
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
