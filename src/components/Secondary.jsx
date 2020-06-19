import React, { useMemo } from 'react'
import { CirclePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Name from './Name'

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
    margin: '24px 0',
  },
})

const Secondary = () => {
  const { setSecondaryColor } = useStoreActions(store => store.palette)
  const { primary, secondary } = useStoreState(state => state.palette)
  const classes = useStyles()
  const options = useMemo(
    () => primary
      .filter(entry => entry.isSecondaryOption)
      .map(entry => entry.newValue),
    [primary],
  )

  return (
    <div className={classes.root}>
      {
        secondary.map(color => (
          <div key={color.name} className={classes.color}>
            <Name color={color} />
            <CirclePicker
              colors={options}
              onChange={newColor =>
                setSecondaryColor({ newValue: newColor.hex, name: color.name })
              }
              color={color.newHex || ''}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Secondary
