import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RoomDetails from './components/RoomDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/Booknow' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/room-details' element={<RoomDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App