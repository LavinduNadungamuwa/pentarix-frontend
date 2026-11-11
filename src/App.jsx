import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'
import AppRoutes from '../routes/AppRoutes'

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
