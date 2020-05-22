import Paper from '@material-ui/core/Paper'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minHeight: 200,
    width: 200,
    marginBottom: 8,
    color: 'white',
    textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ColorSquare = ({ children, hex, onClick }) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.root}
      style={{
        backgroundColor: hex,
      }}
      elevation={5}
      onClick={onClick}
    >
      {children}
    </Paper>
  )
}

export default ColorSquare
