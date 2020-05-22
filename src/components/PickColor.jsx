import { ChromePicker, SketchPicker, BlockPicker } from 'react-color'
import React from 'react'
import { useStoreActions, useStoreState} from 'easy-peasy'
import ChildColors from './ChildColors'

const PickColor = ({ color }) => {
  const { hex } = color || {}
  const replacements = useStoreState(state => state.upload.replacements)
  const palette = useStoreState(state => state.palette)
  const value = replacements[hex] || hex
  const setReplacement = useStoreActions(actions => actions.upload.setReplacement)

  return (
    <div>
      <BlockPicker
        disableAlpha
        color={value}
        onChange={newColor => setReplacement({
          color,
          newColor,
        })}
        colors={palette.list}
      />
      <ChildColors
        colors={color.children}
        replacements={replacements}
      />
    </div>
  )
}

export default PickColor
