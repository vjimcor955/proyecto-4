import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import User from "../pages/User"
import Search from '../pages/Search'
import LayoutPrivate from "../layouts/LayoutPrivate"
import LayoutRoot from "../layouts/LayoutRoot"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      // {
      //   path: "/search/:id",
      //   element: <Contact />
      // },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <User />,
          },
        ]
      }
    ]
  }
])