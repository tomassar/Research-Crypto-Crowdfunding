import React from 'react'
import {search} from '../assets';

const Navbar = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center mb-[35px] gap-6">
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c2410] rounded-[5px]'>
        <div className='w-[72px] h-full rounded-[5px] bg-[#8fccae90] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px] object-contain'/>
        </div>
        <input type="text" placeholder="Search for campaigns" className='pl-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] bg-transparent outline-none' />
      </div>

      {/*Small Screen Navigation */}
    </div>
  )
}

export default Navbar