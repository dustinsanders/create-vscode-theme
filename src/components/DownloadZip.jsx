import Button from '@material-ui/core/Button'
import React, { useMemo, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import downloadZip from '../helpers/downloadZip'
import useMeta from '../hooks/useMeta'
import useTheme from '../hooks/useTheme'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  inputContainer: {
    '& >div': {
      marginTop: 16,
    }
  },
})

const DownloadZip = () => {
  const meta = useMeta()
  const theme = useTheme()
  const [themeName, setThemeName] = useState('')
  const [packageName, setPackageName] = useState('')
  const [gitHubRepoUrl, setGitHubRepoUrl] = useState('')
  const [publisherName, setPublisherName] = useState('')
  const disabled = useMemo(() =>
    !(themeName && packageName && gitHubRepoUrl && publisherName),
    [themeName, packageName, gitHubRepoUrl, publisherName]
  )
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <Typography>Download Zip</Typography>
        <TextField
          label="Theme Name"
          value={themeName}
          onChange={evt => setThemeName(evt.target.value)}
          fullWidth
        />
        <br />
        <TextField
          label="Package Name"
          value={packageName}
          onChange={evt => setPackageName(evt.target.value)}
          fullWidth
        />
        <br />
        <TextField
          label="GitHub Repo Url"
          value={gitHubRepoUrl}
          onChange={evt => setGitHubRepoUrl(evt.target.value)}
          fullWidth
        />
        <br />
        <TextField
          label="VSCE Publisher Name"
          value={publisherName}
          onChange={evt => setPublisherName(evt.target.value)}
          fullWidth
        />
      </div>
      <div>
        <Button
          disabled={disabled}
          color="primary"
          variant="contained"
          fullWidth
          onClick={
            () => downloadZip(
              {
                themeName,
                packageName,
                gitHubRepoUrl,
                publisherName,
              },
              theme,
              meta,
            )
          }
        >
          Download
        </Button>
      </div>
    </div>
  )
}

export default DownloadZip
