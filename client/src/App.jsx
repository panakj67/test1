import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'


import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import WelcomePage from './pages/Welcome'
import Profile from './pages/Profile'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true

const App = () => {
  // const points = useSelector((state) => state.users.points)
  const dispatch = useDispatch()
    const login = useSelector((state) => state.users.login)

  // const clicked = async () => {
  //   try {
  //     const {data} = await axios.get('/');
  //     if(data.success){
  //       dispatch(gain())
  //       toast.success(data.message)
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  const user = useSelector((state) => state.users.user)

  return (
    
    <div>
      <Toaster/>
      <Navbar />
      {/* <HomePage/> */}
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/welcome" element={<WelcomePage />} />
         <Route path="/profile" element={user ? <Profile /> : <Login/>} />
      </Routes>
      {login && <Login/>}
      
    </div>
  )
}

export default App