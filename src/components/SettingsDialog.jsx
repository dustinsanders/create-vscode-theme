import { useStoreState } from 'easy-peasy'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Link from '@material-ui/core/Link'
import React, { useMemo } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import getGitHubUrls from '../helpers/getGitHubUrls'

const useStyles = makeStyles({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  }
})

const SettingsDialog = ({ open, handleClose, setOpen }) => {
  const { gitHubRepo, path } =  useStoreState(state => state.palette)
  const classes = useStyles()

  const urls = useMemo(
    () => getGitHubUrls({ gitHubRepo, path }),
    [gitHubRepo, path],
  )

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => handleClose()}
    >
      <DialogTitle>Settings</DialogTitle>
      <DialogContent className={classes.contentContainer}>
        <DialogContentText>Definition</DialogContentText>
        <TextField
          disabled
          label="GitHub Repo"
          value={gitHubRepo}
          fullWidth
        />
        <br />
        <TextField
          disabled
          label="Path to Theme"
          value={path}
          fullWidth
        />
        <br />
        <Link
          href={urls.repo}
          target="_blank"
        >
          Repo
        </Link>
        <br />
        <Link
          href={urls.theme}
          target="_blank"
        >
          Theme
        </Link>
        <br />
        <Link
          href={urls.meta}
          target="_blank"
        >
          Meta
        </Link>
        <br />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
  </Dialog>
  )
}

export default SettingsDialog
