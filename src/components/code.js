export default
`import { action } from 'easy-peasy'

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
  greenBlue: '#424F46',
  pink: '#E45DA2'
}

const anOldHope = {
  blue: '#4fb4d8',
  green: '#78bd65',
  orange: '#ef7c2a',
  red: '#eb3d54',
  yellow: '#e5cd52',
  background: '#1c1d21',
  comment: '#686b78',
  foreground: '#cbcdd2',
  selection: '#2F3137',
  secondary: '#3f4044',
}

const colors = [
  {
    name: 'foreground',
    hex: anOldHope.foreground,
  },
  {
    name: 'color 1',
    key: 'color1',
    hex: anOldHope.blue,
  },
  {
    name: 'color 2',
    key: 'color2',
    hex: anOldHope.red,
  },
  {
    name: 'color 3',
    key: 'color3',
    hex: anOldHope.green,
  },
  {
    name: 'color 4',
    key: 'color4',
    hex: anOldHope.yellow,
  },
  {
    name: 'color 5',
    key: 'color5',
    hex: anOldHope.orange,
  },
  {
    name: 'background',
    hex: anOldHope.background,
    isBackground: true,
  },
  {
    name: 'comment',
    hex: anOldHope.comment,
  },
  {
    name: 'secondary',
    hex: anOldHope.secondary,
  },
  {
    name: 'selection',
    hex: anOldHope.selection,
  },
]

const palette = {
  colors,
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
    found.hex = hex
  }),
}

export default palette`
