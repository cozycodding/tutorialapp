import React from 'react'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import Content from './Contents'
import Footer from './Footer'

export default function Layout() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212F3C',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </ThemeProvider>
  )
}
