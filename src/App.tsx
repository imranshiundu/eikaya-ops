import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Listings from './pages/Listings'
import Deals from './pages/Deals'
import Partners from './pages/Partners'
import Revenue from './pages/Revenue'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
