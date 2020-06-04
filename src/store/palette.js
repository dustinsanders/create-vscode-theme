import { action } from 'easy-peasy'

const darkPlus = {
  purple: '#C586C0',
  lightBlue: '#9CDCFE',
  darkBlue: '#569CD6',
  tan: '#DCDCAA',
  brown: '#CE9178',
  lightTeal: '#4EC9B0',
  teal: '#51B6C4',
  green: '#6A9955',

  foreground: '#D4D4D4',
  background: '#1E1E1E',
}

const homer = {
  yellow: '#FED90F',
  beige: '#D1B271',
  lightBlue: '#70D1FE',
  // greenBlue: '#d981d8',
  greenBlue: '#cef296',
  // greenBlue: '#e65c09',
  pink: '#FF419E',
}

// const homer = {
//   yellow: '#a5d2ec',
//   pink: '#b0d2b3',
//   lightBlue: '#765b0e',
//   beige: '#afd8dd',
//   greenBlue: '#6AC800',
// }

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
    newHex: '#353333',
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
  }
]

const palette = {
  colors,
  secondary,
  list: [...Object.values(homer)],
  add: action((state, hex) => {
    if (!state.list.includes(hex)) {
      state.list.push(hex)
    }
  }),
  remove: action((state, codeToRemove) => {
    state.list = state.filter(colorCode => colorCode !== codeToRemove)
  }),
  setColor: action((state, { hex, name }) => {
    const found = state.colors.find(color => color.name === name)
    found.newHex = hex
  }),
  setSecondaryColor: action((state, { hex, key }) => {
    const found = state.secondary.find(color => color.key === key)
    found.newHex = hex
  }),
}

export default palette
