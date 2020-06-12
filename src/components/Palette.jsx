import ColorSquare from './ColorSquare'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ChromePicker } from 'react-color'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  color: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  colorPicker: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flex: 2,
  },
})

const Palette = () => {
  const { colors } = useStoreState(state => state.palette)
  const { setColor } = useStoreActions(store => store.palette)
  const classes = useStyles()
  const found = colors.find(entry => entry.isBackground)
  const backgroundColor = found.newHex || found.hex

  return (
    <div>
      {
        colors.map(color => (
          <div key={color.name} className={classes.color}>
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
            <div className={classes.colorPicker}>
              <div>
                <ChromePicker
                  disableAlpha
                  color={color.newHex || color.hex}
                  onChange={newColor =>
                    setColor({ hex: newColor.hex, name: color.name })
                  }
                />
              </div>
              <ColorSquare
                backgroundColor={backgroundColor}
                hex={color.newHex || color.hex}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Palette
