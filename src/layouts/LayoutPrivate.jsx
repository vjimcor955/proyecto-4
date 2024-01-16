import React from 'react'
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const LayoutPrivate = () => {
  const {user, setUser} = useUserContext()

  return (
    <>
      {
        user? <Outlet /> : <Navigate to="/" />
      }
    </>
  )
}

export default LayoutPrivate