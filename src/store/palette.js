import { action } from 'easy-peasy'

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
