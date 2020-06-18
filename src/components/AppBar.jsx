import MuiAppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          VSCode Theme Generator
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
