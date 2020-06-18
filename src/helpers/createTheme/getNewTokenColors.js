import getValue from './getValue'
import { findEqualColorInList } from './isEqualColor'

const getSettings = (meta, settings) =>{
  const entries = Object.entries(settings)
  const cleaned = entries.map(([key, oldValue]) => {
    const found = findEqualColorInList(oldValue, meta.colors)

    if (found) {
      const newValue = getValue(found)

      return [key, newValue]
    }

    return [key, oldValue]
  })

  return Object.fromEntries(cleaned)
}

const getNewTokenColors = (meta, oldTokenColors) => {
  const newTokenColors = oldTokenColors.map(tokenColor => ({
    ...tokenColor,
    settings: getSettings(meta, tokenColor.settings),
  }))

  return newTokenColors
}

export default getNewTokenColors
