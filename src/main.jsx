import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { CookiesProvider } from "react-cookie";
import App from './App.jsx'
import './index.css'
import { GlobalStates } from './Context/Context.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalStates>
    {/* <CookiesProvider> */}
        <App />
    {/* </CookiesProvider> */}
      </GlobalStates>
  </StrictMode>,
)
