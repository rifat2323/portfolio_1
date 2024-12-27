"use client"

import {  Search, User } from 'lucide-react'
import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DatePickerWithRange } from './DatePicker'

const SearchFilter = () => {
  const [,setIsActive] = useState(false)
  const [value,setvalue] = useState('1 Room,2 Adults')

 

  
  const options = [
    "1 Room,2 Adults",
    "1 Room, 3 Beds",
    "2 Rooms, 2 Adults",
    "2 Rooms, 3 Beds",
  ]
 
  return (
    <div className=' container  mx-auto w-full py-1 md:py-4 gap-2 flex-col md:flex-row flex justify-between  px-4 bg-transparent md:backdrop-blur-lg mt-10 rounded-full items-center'>
        <div className='flex w-full md:w-max justify-center items-center rounded-full md:rounded-none px-4 py-5 md:px-0 md:py-0  backdrop-blur-lg md:backdrop-blur-none'>
        <Search size={22} color='white' />
       <input type="text" placeholder='search destinations, hotels' className=' placeholder:text-white flex-1  outline-none bg-transparent h-full rounded-lg pl-2 text-white ml-4'/>
        </div>
        <DatePickerWithRange/>
        

        <div className=' relative flex justify-center items-center w-full md:w-max backdrop-blur-lg md:backdrop-blur-none p-4 md:p-0 rounded-full md:rounded-none'>

       
        <Popover  >
        <PopoverTrigger   className='flex justify-center gap-2 items-center '>
        <User color='white'  />
        <p className=' md:text-sm lg:text-base text-white transition-all'>{value}</p>  
        </PopoverTrigger>
        <PopoverContent  className="w-56 p-0 mt-2" align="center">
    <ul className="divide-y divide-gray-200">
      {options.map((option) => (
        <li
          key={option}
          className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-150 ease-in-out"
          onClick={() => {
            setvalue(option);
            setIsActive(false);
          }}
        >
         <span className='text-sm font-medium text-gray-700' >

          {option}
         </span>
        </li>
      ))}
    </ul>
  </PopoverContent>
        </Popover>
        </div>
        
        <button className=' w-full md:w-max bg-white text-[#1B4E7A] py-2 px-9 rounded-full '>
            Search
        </button>


    </div>
  )
}

export default SearchFilter