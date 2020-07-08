import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import MonacoEditor from '@monaco-editor/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

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

const ViewJson = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(data)}
        >
          Copy to Clipboard
        </Button>
      </div>
      <br />
      <MonacoEditor
        width="100%"
        height="100%"
        language="json"
        value={data}
        loading={<CircularProgress />}
        options={{
          readOnly: true,
        }}
      />
    </div>
  )
}

export default ViewJson
