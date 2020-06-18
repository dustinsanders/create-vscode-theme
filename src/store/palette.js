import { action } from 'easy-peasy'
import meta from '../presets/homer.meta.json'

const addNewValue = list => list.map(entry => ({
  ...entry,
  newValue: entry.value,
}))

const palette = {
  primary: addNewValue(meta.primary),
  secondary: addNewValue(meta.secondary),
  add: action((state, hex) => {
    if (!state.list.includes(hex)) {
      state.list.push(hex)
    }
  }),
  remove: action((state, codeToRemove) => {
    state.list = state.filter(colorCode => colorCode !== codeToRemove)
  }),
  setColor: action((state, { newValue, name }) => {
    const found = state.primary.find(color => color.name === name)
    found.newValue = newValue
  }),
  setSecondaryColor: action((state, { newValue, name }) => {
    const found = state.secondary.find(color => color.name === name)
    found.newValue = newValue
  }),
}

export default palette
