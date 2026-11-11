import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Services from '../src/pages/Services/Services'
import Projects from '../src/pages/Projects/Projects'
import Research from '../src/pages/Research/Research'
import Insights from '../src/pages/Insights/Insights'
import CareersContact from '../src/pages/CareersContact/CareersContact'
import EconomicCenter from '../src/pages/EconomicCenter/EconomicCenter'
import ComingSoon from '../src/pages/ComingSoon/ComingSoon'
import NotFound from '../src/pages/NotFound/NotFound'

/**
 * All application routes live here.
 * Add new pages by importing them and adding a <Route> below.
 *
 * Placeholder routes render <ComingSoon /> until a real page is built.
 */
const PLACEHOLDER_ROUTES = [
  '/services/:slug',
  '/our-work/:slug',
  '/privacy-policy',
  '/terms-of-service',
]

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/about"      element={<About />} />
      <Route path="/services"   element={<Services />} />
      <Route path="/our-work"   element={<Projects />} />
      <Route path="/research"   element={<Research />} />
      <Route path="/insights" element={<Insights />} />
      {/* Careers and Contact share the same page */}
      <Route path="/careers"    element={<CareersContact />} />
      <Route path="/contact"    element={<CareersContact />} />

      <Route path="/our-work/economic-center-system" element={<EconomicCenter />} />

      {PLACEHOLDER_ROUTES.map((path) => (
        <Route key={path} path={path} element={<ComingSoon />} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
