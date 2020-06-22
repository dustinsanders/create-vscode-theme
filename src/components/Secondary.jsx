import React, { useMemo } from 'react'
import { CirclePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Name from './Name'
import isEqualColor from '../helpers/isEqualColor'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  color: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '36px 0',
  },
})

const getColorValue = (options, color) => {
  if (options.find(entry => isEqualColor(entry.newValue, color.newValue))) {
    return color.newValue
  }

  return options.find(entry => isEqualColor(entry.value, color.value)).newValue
}

const Secondary = () => {
  const { setSecondaryColor } = useStoreActions(store => store.palette)
  const { primary, secondary } = useStoreState(state => state.palette)
  const classes = useStyles()
  const options = useMemo(
    () => primary.filter(entry => entry.isSecondaryOption),
    [primary],
  )

  return (
    <div className={classes.root}>
      {
        secondary.map(color => (
          <div key={color.name} className={classes.color}>
            <Name color={color} />
            <CirclePicker
              colors={options.map(entry => entry.newValue)}
              onChange={newColor =>
                setSecondaryColor({ newValue: newColor.hex, name: color.name })
              }
              color={getColorValue(options, color)}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Secondary
