import React from 'react'

import { BsExclamationTriangle } from "react-icons/bs";

export default function NotFound({sms}) {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-1/2 z-10  w-fit bg-red-500/10  p-2 border border-red-500/50     '>
        
        <BsExclamationTriangle className=' absolute top-0 left-1/2 -translate-1/2 text-3xl text-red-500   ' />

        <p className="mt-2 text-white font-semibold px-5   ">{sms}</p>
    </div>
  )
}
