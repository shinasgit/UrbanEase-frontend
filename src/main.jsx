import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContextShare from './contextShareAPI/ContextShare.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="426036114144-78cbl6kp7t8bpq8t9p8m0765kpmvobtc.apps.googleusercontent.com"> 
      <ContextShare>
        <App />
      </ContextShare>
      
      </GoogleOAuthProvider>
   
    </BrowserRouter>
  </StrictMode>,
)
