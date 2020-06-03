import Button from '@material-ui/core/Button'
import ColorSquare from './ColorSquare'
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { ChromePicker } from 'react-color'
import { useStoreActions, useStoreState } from 'easy-peasy'
import code from './code'
import { makeStyles } from '@material-ui/core'
import getTokenColors from '../helpers/getTokenColors'

const anOldHope = {
  color1: '#4fb4d8',
  color3: '#78bd65',
  color5: '#ef7c2a',
  color2: '#eb3d54',
  color4: '#e5cd52',
  background: '#1c1d21',
  comment: '#686b78',
  foreground: '#cbcdd2',
  selection: '#2F3137',
  secondary: '#3f4044',
}

const test = getTokenColors(anOldHope)

const useStyles = makeStyles({
  color: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    display: 'flex',
    flex: 1
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
  const [hex, setHex] = useState('')
  const { colors, list } = useStoreState(state => state.palette)
  const { add, setColor } = useStoreActions(store => store.palette)
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
