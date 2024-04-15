import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UploadExcel from './App.jsx'
import ProductList from './Products.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<UploadExcel />}
        />
        <Route 
          path="/product"
          element={<ProductList/>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)