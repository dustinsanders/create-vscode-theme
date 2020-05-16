import { ChromePicker } from 'react-color'
import React, { useState } from 'react'

const PickColor = ({ hex }) => {
  const [color, setColor] = useState(hex)

  return (
    <ChromePicker
      color={color}
      onChange={newColor => setColor(newColor.hex)}
      onChangeComplete={newColor => setColor(newColor.hex)}
    />
  )
}

export default PickColor
