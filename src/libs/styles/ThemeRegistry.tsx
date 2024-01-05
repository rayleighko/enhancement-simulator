"use client"

import { Global } from "@emotion/react"
import { FC, PropsWithChildren } from "react"
import { GlobalStyles as BaseStyles } from "twin.macro"

import { CssBaseline, ThemeProvider } from "~/libs/mui"

import NextAppDirEmotionCacheProvider from "./EmotionCache"
import { globalStyles } from "./globalStyles"
import { MuiTheme } from "./MuiTheme"

export const ThemeRegistry: FC<PropsWithChildren> = ({ children }) => (
  <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
    <ThemeProvider theme={MuiTheme}>
      <BaseStyles />
      <Global styles={globalStyles} />
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  </NextAppDirEmotionCacheProvider>
)
