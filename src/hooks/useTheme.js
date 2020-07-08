import { useMemo } from 'react'
import { useStoreState } from 'easy-peasy'
import createTheme from '../helpers/createTheme'

const useTheme = () => {
  const palette = useStoreState(state => state.palette)
  const theme = useMemo(
    () => createTheme(palette),
    [palette],
  )

  return theme
}

export default useTheme
