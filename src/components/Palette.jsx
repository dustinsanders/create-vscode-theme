import Button from '@material-ui/core/Button'
import ColorSquare from './ColorSquare'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Palette = () => {
  const [hex, setHex] = useState('')
  const { list } = useStoreState(state => state.palette)
  const { add } = useStoreActions(store => store.palette)

  return (
    <div>
      {
        list.map(entry =>
          <ColorSquare key={entry} hex={entry} />
        )
       }
      <ChromePicker
        disableAlpha
        color={hex}
        onChange={newColor => setHex(newColor.hex)}
      />
      <Button
        disabled={list.includes(hex)}
        color="primary"
        variant="contained"
        onClick={() => {
          console.log('onClick', hex)
          add(hex)
          setHex('')
        }}
      >
        Add Color
      </Button>
    </div>
  )
}

export default Palette
