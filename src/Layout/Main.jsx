import React from 'react'
import TopNavbar from '../Shared/Header/TopNavbar/TopNavbar'
import Navbar from '../Shared/Header/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

const Main = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main