import get from 'lodash/get'
import getValue from './getValue'
import createDerivative from './createDerivative'

const getSettings = (meta, settings) =>{
  const entries = Object.entries(settings)
  const cleaned = entries.map(([key, oldHex]) => {
    const foundDerivative = meta.colors.find(entry =>
      get(entry, ['derivatives', oldHex])
    )

    if (foundDerivative) {
      const operation = foundDerivative.derivatives[oldHex]
      const newHex = createDerivative(
        getValue(foundDerivative),
        operation,
      )

      return [key, newHex]
    }

    const found = meta.colors.find(entry => entry.hex === oldHex)

    if (found) {
      const newHex = getValue(found)

      return [key, newHex]
    }

    return [key, oldHex]
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
