import Link from 'next/link'
import React from 'react'

const BigNav = () => {
    const nav = ['Home','Stays',"Flights","Package"]
  return (
    <div className=' hidden mt-5 w-full px-[5%]  sm:flex  justify-between items-center bg-transparent absolute top-0 z-30'>
        <Link href={'/'} className=' text-3xl font-bold text-gray-50 '>trxvl.</Link>
        <ul className=' flex flex-1 justify-end  items-center gap-3 '>
           {
            nav.map((item,index)=>(
                <li key={index} className=' cursor-pointer group text-white text-base opacity-80 w-[70px] font-light flex flex-col justify-center items-start gap-2 hover:opacity-100 transition-all'>
                    {item}
                    <span className='  w-0 group-hover:w-full transition-all  origin-bottom h-[0.1rem] rounded-lg bg-white'></span>
                    </li>
            ))
           }
         <li  className=' cursor-pointer group text-white text-base opacity-80 w-[70px] font-bold flex flex-col justify-center items-start gap-2 hover:opacity-100 transition-all'>
                     Sing Up
                    <span className='  w-[0%] group-hover:w-0 transition-all  origin-bottom h-[0.1rem] rounded-lg bg-white'></span>
                    </li>
         
        </ul>

    </div>
  )
}

export default BigNav