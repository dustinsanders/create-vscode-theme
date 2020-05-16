import { useStoreState } from 'easy-peasy'
import React, { useMemo } from 'react'
import reduceGeneratedTheme from '../helpers/reduceGeneratedTheme'

const Index = () => {
  const upload = useStoreState(state => state.upload)
  const theme = useMemo(
    () => reduceGeneratedTheme(upload.payload),
    [upload.payload],
  )

  return (
    <div>
      {theme.length} Unique Colors
      {
        theme.map((color, idx) =>
          <div
            key={color.hex}
            style={{
              height: 200,
              width: 200,
              borderRadius: '50%',
              marginBottom: 8,
              backgroundColor: color.hex,
              color: 'white',
              textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {color.hex} ({color.count})
            <br />
            {idx}
          </div>,
        )
      }
    </div>
  )
}

export default Index
