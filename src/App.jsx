import './App.css'
import {} from 'react'
import {toast} from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Like from './pages/Like'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Footer from './components/Footer'


function App() {


  return (
    <>
    
    <div className='main'>
      
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/like' element={<Like/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>

      <Footer/>
    </div>
    </>
  )
}

export default App
