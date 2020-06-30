import { StoreProvider } from 'easy-peasy'
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme // https://github.com/mui-org/material-ui/issues/13394
} from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import AppBar from './components/AppBar'
import Index from './routes/Index'
import store from './store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
})

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <Index />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
