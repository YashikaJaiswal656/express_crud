import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cat from './Cat.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './View.jsx';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/cat' element={<Cat/>} />
    <Route path='/view' element={<View/>} />
  </Routes>
  </BrowserRouter>
)
