import React from 'react'
import Typography from '@material-ui/core/Typography'
import { CirclePicker } from 'react-color'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Secondary = () => {
  const { setSecondaryColor } = useStoreActions(store => store.palette)
  const { colors, secondary } = useStoreState(state => state.palette)
  const options = colors
    .filter(entry => entry.isSecondaryOption)
    .map(entry => entry.newHex || entry.hex)

  return (
    <div>
      {
        secondary.map(entry => (
          <div key={entry.name}>
            <Typography>{entry.name}</Typography>
            <CirclePicker
              colors={options}
              onChange={newColor =>
                setSecondaryColor({ hex: newColor.hex, name: entry.name })
              }
              color={entry.newHex || ''}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Secondary
