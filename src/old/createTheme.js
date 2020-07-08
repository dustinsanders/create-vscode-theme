import getColors from './getColors'
import getTokenColors from './getTokenColors'

const homer = {
  yellow: '#FED90F',
  beige: '#D1B271',
  lightBlue: '#70D1FE',
  greenBlue: '#cef296',
  pink: '#FF419E',
}

const anOldHope = {
  blue: '#4fb4d8',
  green: '#78bd65',
  orange: '#ef7c2a',
  red: '#eb3d54',
  yellow: '#e5cd52',
  background: '#101010',
  comment: '#686b78',
  foreground: '#cbcdd2',
  selection: '#2F3137',
  secondary: '#3f4044',
}

const colors = [
  {
    name: 'background',
    hex: anOldHope.background,
    isBackground: true,
    newHex: '#2D2C2C',
  },
  {
    name: 'foreground',
    hex: anOldHope.foreground,
    newHex: '#f8f8f8',
  },
  {
    name: 'color 1',
    key: 'color1',
    hex: anOldHope.blue,
    isSecondaryOption: true,
    newHex: homer.yellow,
  },
  {
    name: 'color 2',
    key: 'color2',
    hex: anOldHope.red,
    isSecondaryOption: true,
    newHex: homer.pink,
  },
  {
    name: 'color 3',
    key: 'color3',
    hex: anOldHope.green,
    isSecondaryOption: true,
    newHex: homer.beige,
  },
  {
    name: 'color 4',
    key: 'color4',
    hex: anOldHope.yellow,
    isSecondaryOption: true,
    newHex: homer.lightBlue,
  },
  {
    name: 'color 5',
    key: 'color5',
    hex: anOldHope.orange,
    isSecondaryOption: true,
    newHex: homer.greenBlue,
  },
  {
    name: 'comment',
    hex: anOldHope.comment,
    newHex: '#969BA7',
    description: 'Foreground color for commented out code and inactive tabs'
  },
  {
    name: 'secondary',
    hex: anOldHope.secondary,
    newHex: '#494950',
  },
  {
    name: 'selection',
    hex: anOldHope.selection,
    newHex: '#494950',
  },
]

const secondary = [
  {
    name: 'Added',
    key: 'added',
    hex: anOldHope.green,
    newHex: homer.greenBlue,
  },
  {
    name: 'Deleted',
    key: 'deleted',
    hex: anOldHope.red,
    newHex: homer.pink,
  },
  {
    name: 'Modified',
    key: 'modified',
    hex: anOldHope.orange,
    newHex: homer.lightBlue,
  },
  {
    name: 'Error',
    key: 'error',
    hex: anOldHope.red,
    newHex: homer.pink,
  },
  {
    name: 'Warning',
    key: 'warning',
    hex: anOldHope.green,
    newHex: homer.beige,
  },
  {
    name: 'findHighlight',
    key: 'findHighlight',
    hex: anOldHope.beige,
    newHex: homer.beige
  }
]

export const copyToClipboard = async () => {
  const combined = [ ...colors, ...secondary ]
  const replacements = combined.reduce((acc, curr) => ({
    ...acc,
    [curr.key || curr.name]: curr.newHex || curr.hex,
  }), {})

  console.log('replacements', replacements)

  const newTheme = {
    colors: getColors(replacements),
    tokenColors: getTokenColors(replacements),
  }

  return navigator.clipboard.writeText(JSON.stringify(newTheme, null, 2))
}
