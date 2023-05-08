import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/Nav'
import Top from './components/Top/Top'
import './styles/Cards.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/Home'
import AboutUs from './components/AboutUs/About'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Eligibility } from './components/Eligibility/Eligibility'
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { BlogContentStructure } from './components/BlogContentStructure/BlogContentStructure';

const App = () => {
  return (
    <>
      <Top />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path="elibility"  element={<Eligibility />} />
        <Route path="/article/:id" element={<BlogContentStructure />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App