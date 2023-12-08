import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LPcoms'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CustComs from './Pages/CustomerDashboard'
import HistoryPage from './Components/HistoryComs'
import Verification from './Pages/Verification'
import History from './Pages/History'


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
        <Route path='/History' element={<History/>} />
        <Route path='/Verification' element={<Verification/>} />
      </Routes>
    </Router>
   )
}

export default App
