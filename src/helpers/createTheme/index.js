import { diff } from 'deep-object-diff'
import getNewColors from './getNewColors'
import getNewTokenColors from './getNewTokenColors'

const createTheme = palette => {
  const {
    colors: oldColors,
    tokenColors: oldTokenColors,
  } = palette.theme
  const newColors = getNewColors(palette, oldColors)
  const newTokenColors = getNewTokenColors(palette, oldTokenColors)

  const newTheme = {
    ...palette.theme,
    colors: newColors,
    tokenColors: newTokenColors,
  }

  return JSON.stringify(newTheme, null, 2)
}

export default createTheme
