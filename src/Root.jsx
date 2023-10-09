import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { AuthContexts } from './components/context/AuthContext'
import EventContext from './components/context/EventContext'
import Navbar from './pages/shared/Navbar'

function Root() {
  const {loading} = AuthContexts();
  return (
    <>
        <EventContext>
            <Navbar />
            {!loading &&  <Outlet />}
            {loading &&  <div className='min-h-screen w-full fixed z-50 flex justify-center bg-primary items-center'><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif' className=' w-44' /></div> }
            <Footer />

        </EventContext>
    </>
  )
}

export default Root