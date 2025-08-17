// Layout.jsx
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({setSearch}) {
  return (
    <div className='flex flex-col min-h-screen bg-[#F4F2EE]'>
      
      {/* المنطقة الرئيسية */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Outlet/>
        </div>
      </div>

      {/* الفوتر */}
      <Footer />
    </div>
  )
}
