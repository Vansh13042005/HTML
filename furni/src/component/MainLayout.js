import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
const MainLayout = () => {
  return (
    <div>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout