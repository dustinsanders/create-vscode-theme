import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 200,
    width: 200,
    marginBottom: 8,
    color: 'white',
    textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const ViewColor = ({ hex, hsl, count }) => {
  const classes = useStyles()

  return (
    <Paper
      key={hex}
      className={classes.root}
      style={{
        backgroundColor: hex,
      }}
      elevation={5}
    >
      <Typography>
        {hex} ({count})
        <br />
        {hsl}
      </Typography>
    </Paper>
  )
}

export default ViewColor
