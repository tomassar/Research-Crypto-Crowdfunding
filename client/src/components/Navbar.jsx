import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import Icon from './Icon';
import { navlinks } from '../constants/index';
import { profile, search, menu } from '../assets';

/**
 * Navbar component for rendering a responsive navigation bar.
 *
 * @returns {JSX.Element} - The rendered Navbar component.
 */
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = '0xdsadsa';

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center lg:items-center md:items-center mb-[35px] gap-6">
      {/* Search Bar */}
      <div className="lg:flex-1 flex flex-row lg:max-w-[400px] max-w-[600px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c2410] rounded-[5px]">
        <div className="w-[72px] h-full rounded-[5px] bg-[#96b6d78f] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
        <input
          type="text"
          placeholder="Search for campaigns"
          className="pl-2 flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] bg-transparent outline-none"
        />
      </div>

      {/* Small Screen Navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#1a1c1b20] flex justify-center items-center cursor-pointer">
          <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        {/* Drawer */}
        <div className={`absolute top-[60px] mb-4 right-0 left-0 bg-[#bcbcae] rounded-[5px] z-10 shadow-secondary ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="my-2">
            {/* Map through navlinks to render navigation items */}
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 h-[50px] ${isActive === link.name && 'bg-[#96b6d78f]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <Icon {...link} isActive={false} styles="w-[20px] h-[20px]" />
                <p className={`ml-[20px] font-epilogue semi-bold text-[13px]`}>{link.name}</p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4 mb-2 mt-4">
            {/* Button for publishing a campaign or connecting */}
            <CustomButton
              btnType="button"
              title={address ? "Publish a campaign" : "Connect"}
              styles={address ? 'bg-[#96b6d78f]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else 'connect()'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar