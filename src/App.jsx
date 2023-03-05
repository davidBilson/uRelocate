// import ExclusiveSection from './components/ExclusiveSection/ExclusiveSection'
// import FeaturedTitle from './components/FeaturedTitle/FeaturedTitle'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/Nav'
import Top from './components/Top/Top'
import './styles/Cards.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/Home'
import AboutUs from './components/AboutUs/About'
import PageNotFound from './components/PageNotFound/PageNotFound'

const App = () => {
  return (
    <>
      <Top />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App