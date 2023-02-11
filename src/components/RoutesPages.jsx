import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage"
import LoginPage from './LoginPage'
import RegisterPage from './Register'
import axios from "axios"
import {UserContextProvider} from "../UserContext"
import AccountPage from './AccountPage'
import Home from './Home'


axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials= true;


export default function RoutesPages  ()  {
  return (
    <UserContextProvider>
   <Routes>
   
   <Route path='/'  element={<HomePage />}>
   <Route index element={<Home />} />
   <Route path='/login'  element={<LoginPage />}/>
   <Route path='/register'  element={<RegisterPage />}/>
   <Route  path='/account/:subpage?' element={<AccountPage />} />
   <Route  path='/account/:subpage/:action' element={<AccountPage />} />
 
   </Route>
   
   </Routes>
   </UserContextProvider>
  )
}

