import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
})

const Name = ({ color }) => {
  const classes = useStyles()

  return (
    <div className={classes.name}>
      <Typography variant="h4">
        {color.name}
      </Typography>
      <br />
      <br />
      <Typography>
        <i>{color.description}</i>
      </Typography>
    </div>
  )
}

export default Name
