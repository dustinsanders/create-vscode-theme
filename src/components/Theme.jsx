import { useStoreState } from 'easy-peasy'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import MonacoEditor from '@monaco-editor/react'
import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import createTheme from '../helpers/createTheme'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
})

const Theme = () => {
  const palette = useStoreState(state => state.palette)
  const theme = useMemo(
    () => createTheme(palette),
    [palette],
  )
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(theme)}
        >
          Copy to Clipboard
        </Button>
      </div>
      <br />
      <MonacoEditor
        width="100%"
        height="100%"
        language="json"
        value={theme}
        loading={<CircularProgress />}
        options={{
          readOnly: true,
        }}
      />
    </div>
  )
}

export default Theme
