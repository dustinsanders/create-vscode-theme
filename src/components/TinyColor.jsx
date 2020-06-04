import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import ColorSquare from './ColorSquare'
import tinycolor from 'tinycolor2'
import { useStoreState } from 'easy-peasy'
import uniq from 'lodash/uniq'



const TinyColor = () => {
  const [hex, setHex] = useState('')
  const { colors } = useStoreState(state => state.palette)
  const options = uniq(
    colors.map(entry => entry.newHex || entry.hex),
  )

  const generated = uniq(
    tinycolor(hex)
      .monochromatic()
      .map(t => t.toHexString())
  )

  return (
    <div>
      Tiny Color
      <CirclePicker
        colors={options}
        onChange={newColor => setHex(newColor.hex)}
        color={hex}
      />
      {
        hex &&
          generated.map(entry =>
            <ColorSquare key={entry} hex={entry} backgroundColor={entry} />,
          )
      }
    </div>
  )
}

export default TinyColor
