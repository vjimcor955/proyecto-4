import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// Layouts
import LayoutRoot from "../layouts/LayoutRoot"
import LayoutPrivate from "../layouts/LayoutPrivate"
// Pages
import Home from "../pages/Home"
import Search from '../pages/Search'
import Contact from '../pages/Contact'
import LoginPage from '../pages/LoginPage'
import User from "../pages/User"


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutRoot />}>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/pokemon/:id' element={<Contact />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/user' element={<LayoutPrivate />}>
        <Route index element={<User />} />
      </Route>
    </Route>
  )
)