import Paper from '@material-ui/core/Paper'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 250,
    width: 250,
    padding: 48,
  },
  color: {
    height: '100%',
    width: '100%',
    color: 'white',
    borderRadius: 5,
    textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ColorSquare = ({
  backgroundColor,
  children,
  hex,
  onClick,
}) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.root}
      style={{
        backgroundColor,
      }}
      onClick={onClick}
      square
    >
      <div
        className={classes.color}
        style={{
          backgroundColor: hex,
        }}
      >
        {children}
      </div>
    </Paper>
  )
}

export default ColorSquare
