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
  greenBlue: '#424F46',
  pink: '#E45DA2'
}

const palette = {
  list: [...Object.values(homer)],
  add: action((state, hex) => {
    if (!state.list.includes(hex)) {
      state.list.push(hex)
    }
  }),
  remove: action((state, codeToRemove) => {
    state.list = state.filter(colorCode => colorCode !== codeToRemove)
  }),
}

export default palette
