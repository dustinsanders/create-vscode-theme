import getColors from './getColors'
import getTokenColors from './getTokenColors'

export const copyToClipboard = async ({ colors1: colors, secondary1: secondary }) => {
  const combined = [ ...colors, ...secondary ]
  const replacements = combined.reduce((acc, curr) => ({
    ...acc,
    // [curr.key]: curr.newHex || curr.hex,
    [curr.key || curr.name]: curr.newHex || curr.hex,
  }), {})

  console.log('replacements', replacements)

  const newTheme = {
    colors: getColors(replacements),
    tokenColors: getTokenColors(replacements),
  }

  return navigator.clipboard.writeText(JSON.stringify(newTheme, null, 2))
}
