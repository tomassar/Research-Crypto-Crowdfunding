import React from 'react'

import {category, profile} from '../assets'
import {calculateDaysLeft} from '../utils'

const CampaignCard = ({owner, title, description, target, deadline, amountCollected, image, handleClick}) => {
    const daysLeft = calculateDaysLeft(deadline)

    return (
    <div className="sm:w-[288px] w-full border border-[#b7ccdb] bg-[#dde2e4] rounded-[2px]" >
        <div className="flex items-center p-[10px] gap-[12px] bg-[#00000023]">
            <div className='cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#dde2e4]' onClick={handleClick}>
                <img src={profile} alt="user" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="flex-1 font-epilogue font-normal text-[13px] truncate">by <span className="text-[#fff]">{owner}</span></p>
        </div>
        <img src={image} alt="campaign" className="transition duration-300 ease-in-out hover:opacity-70 cursor-pointer w-full h-[158px] object-cover rounded-[2px] "/>
        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
                <img src={category} alt="tag" className="w-[17px] h-[17px] object-contain" />
                <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[13px]">Category</p>
            </div>

            <div className="block">
                <h3 className="transition duration-300 ease-in-out hover:opacity-70 font-epilogue font-semibold text-[16px] text-black text-left break-all leading-[20px] cursor-pointer" onClick={handleClick}>{title}</h3>
                <p className="mt-[10px] font-epilogue font-normal text-black text-left leading-[20px] line-clamp-5">{description}</p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px]">
                <progress className="w-full rounded-[4px] bg-[#00000023]" id="file" value={amountCollected} max={target}> </progress>

                <h4 className="font-epilogue font-semibold text-[14px] text-black leading-[22px] mt-2">{amountCollected} ETH</h4>
                <h4 className="font-epilogue font-semibold text-[14px] text-black leading-[22px] mt-2">{target} ETH</h4>
            </div>
            <p className="font-epilogue font-bold text-[14px] text-black leading-[22px] mt-2">{daysLeft} days left!</p>
        </div>
    </div>
  )
}

export default CampaignCard