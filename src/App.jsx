import { StoreProvider } from 'easy-peasy'
import React from 'react'
import Index from './routes/Index'
import store from './store'

const App = () => {
  return (
    <StoreProvider store={store}>
      <Index />
    </StoreProvider>
  )
}

export default App
