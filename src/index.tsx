import React from 'react'
import { createRoot, type Root } from 'react-dom/client'

import App from './App'

const root: Root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
