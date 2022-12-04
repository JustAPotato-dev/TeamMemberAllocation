import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Employees from './pages/Employees'
import GroupedTeamMembers from './pages/GroupedTeamMembers'
import NotFound from './pages/NotFound'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  )
}

export default App
