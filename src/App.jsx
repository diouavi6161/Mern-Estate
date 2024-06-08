import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import SignOut from './Pages/SignOut'
import About from './Pages/About'
import Profile from './Pages/Profile'

export default function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sign-out' element={<SignOut />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  
  </BrowserRouter>
}
