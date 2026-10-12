import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PackagePage from './pages/PackagePage'
import PackageDetailPage from './pages/PackageDetailPage'
import DestinationPage from './pages/DestinationPage'
import DestinationDetailPage from './pages/DestinationDetailPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/packages" element={<PackagePage />} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App