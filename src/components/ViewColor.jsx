import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ChildColors from './ChildColors'

const useStyles = makeStyles({
  color: {
    minHeight: 200,
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

const ViewColor = ({ alpha, hex, hsla, count, children, tokenColors, ...rest }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper
        className={classes.color}
        style={{
          backgroundColor: hex,
        }}
        elevation={5}
        onClick={() => console.log(rest.flattenedScopes || rest.keys)}
      >
        <Typography>
          {hex} ({count})
          <br />
          {hsla}
          <br />
          {/* {
            tokenColors.map(tokenColor =>
              <div>{tokenColor}</div>
            )
          } */}
        </Typography>
      </Paper>
      <ChildColors colors={children} />
    </div>
  )
}

export default ViewColor
