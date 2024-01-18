import React from 'react'
import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"
import PublicLAyout from '../Layout/Public-Layout'
import {Route, Routes, Navigate} from "react-router-dom"

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route element={<PublicLAyout />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </>
  )
}
