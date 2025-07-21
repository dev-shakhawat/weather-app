import React from 'react'
import { Link } from 'react-router'

export default function Welcome() {
  return (
    <div className=' w-full h-screen md:p-10 p-5 bg-[#0b131e] grid md:grid-cols-2 place-items-center overflow-hidden   '>
      
      <img src="/wether.webp" alt="" className=' w-full h-full object-cover overflow-hidden rounded-[10px] hidden md:inline-block  ' />

      {/* welcome  */}
      <div className="flex items-center justify-center  flex-col gap-5 text-white font-ubuntu ">
        <img src="/umbrella.png" alt="umbrella" className=" w-[80px]  object-cover overflow-hidden rounded-[10px] " />

        <h2 className="font-bold md:text-3xl text-xl ">Welcome to Weather App</h2>

        <h3 className="flex items-center gap-2   ">
          <p>Created by -</p>
          <Link to={`https://github.com/dev-shakhawat`} className=' text-blue-400 font-semibold '>Md. Shakhawat Hossain</Link>
        </h3>

        <Link to={`/weather`} className=' text-white font-semibold bg-blue-400 py-2 px-10 rounded-[10px] '>Continue</Link>

      </div>
    </div>
  )
}
