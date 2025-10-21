import Portfolio from './pages/portfolio'
import { ThemeProvider } from './context/ThemContext'

function App() {


  return (
    <>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </>
  )
}

export default App
