import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';

import { logo } from '../assets';
import { navlinks } from '../constants';

/**
 * Leftbar component for rendering a sidebar with navigation icons.
 * 
 * @returns {JSX.Element} - The rendered Leftbar component.
 */
const Leftbar = () => {
  const navigate = useNavigate();

  // State to track the active icon
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[80vh]">
      {/* Logo with link to home */}
      <Link to="/">
        <Icon styles="w-[70px] h-[70px] bg-[#FFFFFF00]" imgUrl={logo} />
      </Link>
      
      {/* Navigation icons */}
      <div className="flex-1 flex flex-col justify-between items-center border-r border-[#b7ccdb] w-[65px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3"> 
          {/* Map through navlinks to render icons */}
          {navlinks.map((link) => (
            <Icon
              styles="w-[42px] h-[42px]"
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
