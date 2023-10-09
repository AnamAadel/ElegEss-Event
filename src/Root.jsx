import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import EventContext from './components/context/EventContext'
import Navbar from './pages/shared/Navbar'

function Root() {
  return (
    <>
        <EventContext>
            <Navbar />
            <Outlet />
            <Footer />

        </EventContext>
    </>
  )
}

export default Root