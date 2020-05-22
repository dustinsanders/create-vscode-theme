import Paper from '@material-ui/core/Paper'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import get from 'lodash/get'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  childColor: {
    width: 25,
    height: 25,
    borderRadius: '50%',
    flexWrap: 'wrap',
  },
})

let let1 = 'test'
var var1 = 'var'


const ViewColor = ({ colors, replacements }) => {
  const classes = useStyles()

  if (!colors) {
    return null
  }

  return (
    <div className={classes.root}>
      {
        colors.map(color => {
          const colorCode = get(replacements, [color.hex], color.hex)

          return (
            <Paper
              className={classes.childColor}
              key={color.hex}
              style={{
                backgroundColor: colorCode,
              }}
            />
          )
        })
      }
    </div>
  )
}

export default ViewColor
