import { useStoreState } from 'easy-peasy'
import ColorMap from './ColorMap'
import React from 'react'
import parseColors from '../helpers/parseColors'

const Background = () => {
  const { payload } = useStoreState(state => state.upload)
  const colors = parseColors(payload)

  return (
    <div>
      Background
      <ColorMap colors={colors} />
    </div>
  )
}

export default Background
