import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
// import App from './App.jsx'
import './index.css'
import router from './router/router.jsx'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Provider store={store}>
      <RouterProvider router = {router} /> 
    </Provider>
  </StrictMode>,
)
