import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/css/index.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import IntroSection from './components/IntroSection/IntroSection'
import Rules from './components/Rules/Rules'
import Criteria from './components/Criteria/Criteria'
import Faq from './components/FAQ/FAQ'
import Rewards from './components/Rewards/Rewards'
import Partners from './components/Partners/Partners'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import Foooter from './components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Register from './Pages/Register/Register'
import TimeLine from './components/Timeline/Timeline'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HeroSection />
            <IntroSection />
            <Rules />
            <Criteria />
            <Faq />
            <TimeLine /> 
            <Rewards />
            <Partners />
            <PrivacyPolicy />
            <Foooter />
          </>
        }/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
