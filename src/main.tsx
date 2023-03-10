import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 全局css初始样式
import 'normalize.css/normalize.css'
import "@/assets/styles/global.scss"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
