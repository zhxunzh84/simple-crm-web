// Main entry point for the React application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CustomerProvider } from './contexts/CustomerContext.jsx'
// Create the root element and render the application within the context providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </AuthProvider>
  </StrictMode>,
)
