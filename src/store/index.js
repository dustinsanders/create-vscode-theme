import { createStore } from 'easy-peasy'
import palette from './palette'
import upload from './upload'

const store = createStore({
  palette,
  upload,
})

export default store
