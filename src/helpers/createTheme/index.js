import theme from '../../presets/homer.json'
import { diff } from 'deep-object-diff'
import getNewColors from './getNewColors'
import getNewTokenColors from './getNewTokenColors'

const {
  colors: oldColors,
  tokenColors: oldTokenColors,
} = theme

const createTheme = palette => {
  const newColors = getNewColors(palette, oldColors)
  const newTokenColors = getNewTokenColors(palette, oldTokenColors)

  const newTheme = {
    ...theme,
    colors: newColors,
    tokenColors: newTokenColors,
  }

  return JSON.stringify(newTheme, null, 2)
}

export default createTheme
