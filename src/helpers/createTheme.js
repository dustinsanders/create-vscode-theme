import get from 'lodash/get'
import mapValues from 'lodash/mapValues'

import getColors from './getColors'
import getTokenColors from './getTokenColors'

const makeGetHex = replacements =>
  hex => replacements[hex.toUpperCase()] || hex.toUpperCase()

const createTheme = (orginal, replacements) => {
  const getHex = makeGetHex(replacements)

  const newTheme = {
    ...orginal,
    colors: mapValues(orginal.colors, getHex),
    tokenColors: orginal.tokenColors.map(tokenColor => {
      const foreground = get(tokenColor, 'settings.foreground')

      if (foreground) {
        return ({
          ...tokenColor,
          settings: {
           ...tokenColor.settings,
           foreground: getHex(foreground),
          },
        })
      }

      return tokenColor
    }),
  }

  return newTheme
}

export const copyToClipboard = async palette => {
  console.log('palette', palette)

  const replacements = palette.colors.reduce((acc, curr) => ({
    ...acc,
    [curr.key || curr.name]: curr.newHex || curr.hex,
  }), {})

  console.log('replacements', replacements)

  const colors = getColors(replacements)
  const tokenColors = getTokenColors(replacements)
  const newTheme = {
    colors,
    tokenColors,
  }

  return navigator.clipboard.writeText(JSON.stringify(newTheme, null, 2))
}
