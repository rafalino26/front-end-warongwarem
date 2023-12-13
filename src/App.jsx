import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LPcoms'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CustComs from './Pages/CustomerDashboard'
import Verification from './Pages/Verification'
import SignupMW from './Pages/SignupMW'
import Reservation from './Pages/Reservation'
import Managers from './Pages/Managers'


const App = () => {
   return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/CustomerDashboard' element={<CustComs/>} />
        <Route path='/Reservation' element={<Reservation/>} />
        <Route path='/Verification' element={<Verification/>} />
        <Route path='/SignupMW' element={<SignupMW/>} />
        <Route path='/Managers' element={<Managers/>} />
      </Routes>
    </Router>
   )
}

export default App
