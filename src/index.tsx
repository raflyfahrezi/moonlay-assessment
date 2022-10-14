import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app'
import { store, storeContext as StoreContext } from '@/context'

import '@/styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>
)
