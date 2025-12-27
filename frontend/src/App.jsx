import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TemplatesPage from './pages/TemplatesPage'
import BuilderPage from './pages/Builder'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'
import ForgotPasswordPage from './pages/ForgotPassword'
import TemplateEditor from './pages/TemplateEditor'
import NotFound from './pages/NotFound'
import './App.css'

// NOTE: ensure `react-router-dom` is installed in your frontend dependencies

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:id" element={<TemplateEditor />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App