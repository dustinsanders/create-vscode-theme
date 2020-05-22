import get from 'lodash/get'
import mapValues from 'lodash/mapValues'

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

export const copyToClipboard = async (orginal, replacements) => {
  const newTheme = createTheme(orginal, replacements)

  return navigator.clipboard.writeText(JSON.stringify(newTheme, null, 2))
}
