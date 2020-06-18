import tinycolor from 'tinycolor2'

const lighten = (color, amount) =>
  tinycolor(color).lighten(amount).toHexString()

const darken = (color, amount) =>
  tinycolor(color).darken(amount).toHexString()

const setOpacity = (color, opacity) =>
  `${tinycolor(color).toHexString()}${opacity}`

const createDerivative = (hex, { derivation }) => {
  const openParenIdx = derivation.indexOf('(')
  const closeParenIdx = derivation.indexOf(')')
  const operationName = derivation.slice(0, openParenIdx)
  const operationValue = parseFloat(
    derivation.slice(openParenIdx + 1, closeParenIdx),
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

export default createDerivative
