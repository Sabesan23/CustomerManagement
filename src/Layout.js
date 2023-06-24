import React from 'react'
import NavbarContainer from './component/Navbar'
import { Footer } from './component/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <NavbarContainer />
            <Outlet/>
            <Footer />
        </>
    )
}
