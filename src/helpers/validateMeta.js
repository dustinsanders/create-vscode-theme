import { diff } from 'deep-object-diff'
import createTheme from './createTheme'

const validateMeta = (state) => {
  const createdTheme = JSON.parse(createTheme(state))

  const themeDiff = diff(createdTheme, state.theme)

  return themeDiff
}

export default validateMeta
