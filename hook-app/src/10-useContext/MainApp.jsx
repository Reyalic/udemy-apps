import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import { UserProvider } from './context/UserProvider'

const MainApp = () => {


  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
     </Routes>
    </UserProvider>
  )
}

export default MainApp