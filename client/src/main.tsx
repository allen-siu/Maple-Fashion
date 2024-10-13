import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import AuthProvider from 'react-auth-kit'
import { authStore } from './store/auth/authStore.ts'

import { Provider } from 'react-redux'
import store from './store/store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider store={authStore}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
