import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite'
import { App } from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
  </StrictMode>,
)
