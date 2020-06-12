import { action } from 'easy-peasy'
import meta from '../presets/homer.meta.json'

const palette = {
  colors: meta.colors,
  secondary: meta.secondary,
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
  setSecondaryColor: action((state, { hex, name }) => {
    const found = state.secondary.find(color => color.name === name)
    found.newHex = hex
  }),
}

export default palette
