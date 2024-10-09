import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import RouteApp from '~/RouteApp'
import { store } from '~/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <RouteApp />
      </Provider>
    </BrowserRouter>
  )
}

export default React.memo(App)
