import { useMemo } from 'react'
import { useStoreState } from 'easy-peasy'
import createMeta from '../helpers/createMeta'

const useMeta = () => {
  const palette = useStoreState(state => state.palette)
  const meta = useMemo(
    () => createMeta(palette),
    [palette],
  )

  return meta
}

export default useMeta
