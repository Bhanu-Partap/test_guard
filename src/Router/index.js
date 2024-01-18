import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </>
  )
}
