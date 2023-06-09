import React, { useState } from 'react';
import Icon from './Icon';
import { Link, useNavigate } from 'react-router-dom';

import {useStateContext} from '../context'
import CustomButton from './CustomButton';
import { profile } from '../assets';

/**
 * Right component for rendering a sidebar on the right side showing campaign topics
 * 
 * @returns {JSX.Element} - The rendered Rightbar component.
 */
const Rightbar = () => {
  const navigate = useNavigate();
  const {connect, address} = useStateContext()


  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[90vh]">
      {/* Desktop View */}
      <div className="sm:flex hidden flex-row justify-end gap-4">
        {/* Publish Campaign Button */}
        <CustomButton
          btnType="button"
          title={address ? "Publish a campaign" : "Connect"}
          styles={address ? '' : 'bg-[#000000cf] text-white'}
          handleClick={() => {
            if (address) navigate('create-campaign');
            else connect()
          }}
        />
        {/* User Profile Link */}
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-[10px] bg-[#1a1c1b20] flex justify-center items-center cursor-pointer">
            <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1a1c1b20] w-[200px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* Topic List */}
          Topic list
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
