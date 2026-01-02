import {Route, BrowserRouter,Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import Authentication from './pages/authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './pages/VideoMeet'
import Homecomponent from './pages/Homecomponent'
import History from './pages/History'

function App() {


  return (
    <>
      <BrowserRouter>

      <AuthProvider>

      <Routes>

      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/auth' element={<Authentication/>}></Route>
      <Route path='/home' element={<Homecomponent/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/:url' element={<VideoMeet/>}></Route>

      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
