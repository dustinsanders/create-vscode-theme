import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Forward from '@material-ui/icons/Forward'
import PickColor from '../components/PickColor'
import ViewColor from '../components/ViewColor'

const useStyles = makeStyles({
  colorContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
})

const ColorMap = ({ colors }) => {
  const classes = useStyles()

  return (
    <div>
      {
        colors.map(color =>
          <div key={color.hex} className={classes.colorContainer}>
            <ViewColor {...color} />
            <Forward style={{ color: 'lightgrey' }} />
            <PickColor color={color} />
          </div>
        )
      }
    </div>
  )
}

export default ColorMap
