import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// This is where the html points to, but it seems like all this does is start the main
// app "App.tsx" not really sure why this is yet
createRoot(document.getElementById('root')!).render(<App />)
