import Portfolio from './pages/portfolio'
import { ThemeProvider } from './context/ThemContext'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/projectDetails'

function App() {


  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
