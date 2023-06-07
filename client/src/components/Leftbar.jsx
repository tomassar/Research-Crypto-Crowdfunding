import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from './Icon'

import {logo} from '../assets';
import {navlinks} from "../constants"

const Leftbar = () => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState('dashboard')
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[80vh]">
      <Link to="/">
        <Icon styles="w-[70px] h-[70px] bg-[#FFFFFF00]" imgUrl={logo}/>
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1a1c1b20] rounded-[20px] w-[65px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3"> 
          {navlinks.map((link) => (
            <Icon
              styles="w-[42px] h-[42px]"
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled){
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>

    
  )
}

export default Leftbar