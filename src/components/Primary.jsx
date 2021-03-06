import ColorSquare from './ColorSquare'
import React from 'react'
import { ChromePicker } from 'react-color'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { makeStyles } from '@material-ui/core'
import Name from './Name'

const useStyles = makeStyles({
  color: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    '& >div': {
      display: 'flex',
      flex: 1,
    }
  },
  picker: {
    justifyContent: 'center',
  },
  square: {
    justifyContent: 'flex-end',
  },
})

const Primary = () => {
  const { primary } = useStoreState(state => state.palette)
  const { setColor } = useStoreActions(store => store.palette)
  const classes = useStyles()
  const found = primary.find(entry => entry.isBackground)
  const backgroundColor = found.newValue

  return (
    <div>
      {
        primary.map(color => (
          <div key={color.name} className={classes.color}>
            <div className={classes.name}>
              <Name color={color} />
            </div>
            <div className={classes.picker}>
              <ChromePicker
                disableAlpha
                color={color.newValue}
                onChange={newColor =>
                  setColor({ newValue: newColor.hex, name: color.name })
                }
              />
            </div>
            <div className={classes.square}>
              <ColorSquare
                backgroundColor={backgroundColor}
                hex={color.newValue}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Primary
