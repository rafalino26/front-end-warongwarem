import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LPcoms'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import SigninAs from './Pages/SigninAs'
import SigninAsCustomers from './Pages/signinAsCustomers'
import SigninAsWaiters from './Pages/signinAsWaiters'
import SigninAsManagers from './Pages/signinAsManagers'

const App = () => {
   return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/SignInAs' element={<SigninAs/>} />
        <Route path='/SignInAsCustomers' element={<SigninAsCustomers/>} />
        <Route path='/SignInAsWaiters' element={<SigninAsWaiters/>} />
        <Route path='/SignInAsManagers' element={<SigninAsManagers/>} />
      </Routes>
    </Router>
   )
}

export default App
