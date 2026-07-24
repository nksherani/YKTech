import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import CookiePolicy from './pages/legal/CookiePolicy'
import AcceptableUse from './pages/legal/AcceptableUse'
import ChildrensPrivacy from './pages/legal/ChildrensPrivacy'
import RefundPolicy from './pages/legal/RefundPolicy'
import DataDeletion from './pages/legal/DataDeletion'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/childrens-privacy" element={<ChildrensPrivacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
