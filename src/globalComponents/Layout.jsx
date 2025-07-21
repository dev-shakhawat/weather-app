import React from 'react'
import { Outlet } from 'react-router'
import SideBar from './SideBar'
import Search from './Search'

export default function Layout() {
  return (
    <div className='md:flex bg-[#0b131e] p-3 gap-3  '>

      {/* side bar */}
      <SideBar className={`flex-1`}/>

      {/* main content */}
      <div className="flex-15    ">

        {/* search bar */}
        <Search/>

        <Outlet/>

      </div>
 
    </div>
  )
}
