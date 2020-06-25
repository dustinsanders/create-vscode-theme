import { action, thunk } from 'easy-peasy'
import presetMeta from '../presets/homer.meta.json'
import presetTheme from '../presets/homer.json'
import getGitHubUrls from '../helpers/getGitHubUrls'

const addNewValue = list => list.map(entry => ({
  ...entry,
  newValue: entry.value,
}))

const defaultGitHubRepo = 'dustinsanders/homer-theme-vscode'
const defaultPath = 'themes/Homer.json'

const initialState = {
  gitHubRepo: defaultGitHubRepo,
  path: defaultPath,
  primary: [],
  secondary: [],
  theme: {},
  isInitialized: false,
}

const palette = {
  ...initialState,
  initialize: action((state, { theme, meta }) => {
    state.theme = theme
    state.primary = addNewValue(meta.primary)
    state.secondary = addNewValue(meta.secondary)
    state.isInitialized = true
  }),
  setColor: action((state, { newValue, name }) => {
    const found = state.primary.find(color => color.name === name)
    found.newValue = newValue
  }),
  setSecondaryColor: action((state, { newValue, name }) => {
    const found = state.secondary.find(color => color.name === name)
    found.newValue = newValue
  }),
  fetchTheme: thunk(async ({ initialize }, _payload, { getState }) => {
    try {
      const state = getState()
      const urls = getGitHubUrls(state)
      const fetchUrls = [urls.theme, urls.meta]

      const [ theme, meta ] = await Promise.all(
        fetchUrls.map(async url => {
          const response = await fetch(url)

          return response.json()
        }),
      )

      initialize({ theme, meta })
    } catch (e) {
      initialize({ theme: presetTheme, meta: presetMeta })
    }
  }),
}

export default palette
