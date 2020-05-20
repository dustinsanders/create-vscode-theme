import { ChromePicker } from 'react-color'
import React from 'react'
import { useStoreActions, useStoreState} from 'easy-peasy'
import ChildColors from './ChildColors'

const PickColor = ({ color }) => {
  const { hex } = color
  const replacements = useStoreState(state => state.upload.replacements)
  const value = replacements[hex] || hex
  const setReplacement = useStoreActions(actions => actions.upload.setReplacement)

  return (
    <div>
      <ChromePicker
        disableAlpha
        color={value}
        onChange={newColor => setReplacement({
          color,
          newColor,
        })}
      />
      <ChildColors
        colors={color.children}
        replacements={replacements}
      />
    </div>
  )
}

export default PickColor
