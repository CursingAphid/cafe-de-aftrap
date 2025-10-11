import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
