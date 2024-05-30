import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllVideoContextProvider } from './context/all vedio_context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<AllVideoContextProvider>
<App />
</AllVideoContextProvider>

    
   
)
