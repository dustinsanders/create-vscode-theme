import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ChildColors from './ChildColors'

const useStyles = makeStyles({
  color: {
    height: 200,
    width: 200,
    marginBottom: 8,
    color: 'white',
    textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const ViewColor = ({ alpha, hex, hsla, count, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper
        className={classes.color}
        style={{
          backgroundColor: hex,
        }}
        elevation={5}
      >
        <Typography>
          {hex} ({count})
          <br />
          {hsla}
          <br />
          children ({children.length})
        </Typography>
      </Paper>
      <ChildColors colors={children} />
    </div>
  )
}

export default ViewColor
