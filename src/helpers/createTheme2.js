import tinycolor from 'tinycolor2'
import theme from '../presets/homer.json'
import get from 'lodash/get'
import { diff } from 'deep-object-diff'

const lighten = (color, amount) =>
  tinycolor(color).lighten(amount).toHexString()

const darken = (color, amount) =>
  tinycolor(color).darken(amount).toHexString()

const setOpacity = (color, opacity) =>
  `${tinycolor(color).toHexString()}${opacity}`

const createDerivative = (hex, derivativeString) => {
  const openParenIdx = derivativeString.indexOf('(')
  const closeParenIdx = derivativeString.indexOf(')')
  const operationName = derivativeString.slice(0, openParenIdx)
  const operationValue = parseFloat(
    derivativeString.slice(openParenIdx + 1, closeParenIdx),
  )

  switch (operationName) {
    case 'lighten':
      return lighten(hex, operationValue)
    case 'darken':
      return darken(hex, operationValue)
    case 'opacity':
      return setOpacity(hex, operationValue)
    default:
      return console.error('Invalid Derivative Operation:', operationName)
  }
}

const {
  colors: oldColors,
  tokenColors: oldTokenColors,
} = theme

const makeGetNewHexCodeForColor = meta =>
  (key, oldHex) => {
    if (oldHex === null) {
      return null
    }

    const foundSecondary = meta.secondary.find(entry =>
      entry.colors.includes(key)
    )
    const foundSecondaryDerivative = get(foundSecondary, ['derivatives', oldHex])

    if (foundSecondaryDerivative) {
      return createDerivative(
        foundSecondary.newHex || foundSecondary.hex,
        foundSecondaryDerivative,
      )
    }

    if (foundSecondary) {
      return foundSecondary.newHex || foundSecondary.hex
    }

    const foundDerivative = meta.colors.find(({ derivatives }) => {
      if (!derivatives) {
        return false
      }

      return derivatives[oldHex]
    })

    if (foundDerivative) {
      const operation = foundDerivative.derivatives[oldHex]

      return createDerivative(
        foundDerivative.newHex || foundDerivative.hex,
        operation,
      )
    }

    const found = meta.colors.find(entry => entry.hex === oldHex)

    if (found) {
      return found.newHex || found.hex
    }

    console.error('No Match Found for => ', [key, oldHex].join(':'))
  }

const makeGetNewSetting = meta =>
  settings => {
    const entries = Object.entries(settings)
    const cleaned = entries.map(([key, oldHex]) => {
      const foundDerivative = meta.colors.find(entry =>
        get(entry, ['derivatives', oldHex])
      )

      if (foundDerivative) {
        const operation = foundDerivative.derivatives[oldHex]
        const newHex = createDerivative(
          foundDerivative.newHex || foundDerivative.hex,
          operation,
        )

        return [key, newHex]
      }

      const found = meta.colors.find(entry => entry.hex === oldHex)

      if (found) {
        const newHex = found.newHex || found.hex

        return [key, newHex]
      }

      return [key, oldHex]
    })

    return Object.fromEntries(cleaned)
  }


const createTheme = palette => {
  const getNewHexCodeForColor = makeGetNewHexCodeForColor(palette)
  const getNewSetting = makeGetNewSetting(palette)

  const newColors = Object.entries(oldColors)
    .reduce(( acc, [key, oldHex] ) => {

      return {
        ...acc,
        [key]: getNewHexCodeForColor(key, oldHex),
      }
    }, {})

  const newTokenColors = oldTokenColors.map(tokenColor => ({
    ...tokenColor,
    settings: getNewSetting(tokenColor.settings),
  }))

  return {
    colors: newColors,
    tokenColors: newTokenColors,
  }
}

export const copyToClipboard = async palette => {
  const newTheme = createTheme(palette)

  return navigator.clipboard.writeText(JSON.stringify(newTheme, null, 2))
}

export default createTheme
