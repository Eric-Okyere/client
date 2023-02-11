import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavBar from "./MyNavBar"
import Home from "./Home"

export default function HomePage () {
  return (
    <div>
    <MyNavBar />
    <Outlet />
   
    </div>
  )
}

