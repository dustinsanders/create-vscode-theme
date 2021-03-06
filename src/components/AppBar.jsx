import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import MuiAppBar from '@material-ui/core/AppBar'
import React, { useState } from 'react'
import Settings from '@material-ui/icons/Settings'
import SettingsDialog from './SettingsDialog'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const AppBar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <MuiAppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6">
          <Link
            href="https://github.com/dustinsanders/create-vscode-theme"
            target="_blank"
            color="inherit"
          >
            create-vscode-theme
          </Link>
        </Typography>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <Settings />
        </IconButton>
      </Toolbar>
      <SettingsDialog
        open={open}
        handleClose={() => setOpen(false)}
      />
    </MuiAppBar>
  )
}

export default AppBar
