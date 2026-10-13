import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PackagePage from './pages/PackagePage'
import PackageDetailPage from './pages/PackageDetailPage'
import DestinationPage from './pages/DestinationPage'
import DestinationDetailPage from './pages/DestinationDetailPage'

function App() {
  return (
    <BrowserRouter>
   
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/packages" element={<PackagePage />} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />

        {/* Anything else goes home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App