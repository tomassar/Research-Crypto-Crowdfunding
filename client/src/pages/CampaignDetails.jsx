import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {ethers} from 'ethers'

import {useStateContext} from '../context'
import {CustomButton, InfoBox} from '../components'
import {calculateProgressPercentage, calculateDaysLeft} from '../utils'
import {profile} from '../assets'

const CampaignDetails = () => {
  const {state} = useLocation();
  const {getDonations, contract, address} = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [amount, setAmount] = useState('')
  const [donators, setDonators] = useState([])

  const daysLeft = calculateDaysLeft(state.deadline)

  const handleDonate = async () => {

  }

  console.log(state);
  return (
    <div>
      {isLoading && 'Loading...'}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="Campaign image" className="w-full h-[410px] object-cover rounded-[2px]"/>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-3 mb-6">
            <div className='absolute h-full bg-[#4acd8d]' style={{width: `${calculateProgressPercentage(state.target,state.amount)}%`, maxWidth:'100%'}}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-evenly">
        <div className="flex flex-wrap gap-7 justify-between">
          <InfoBox title="Days left" value={daysLeft}/>
          <InfoBox title="Total donators" value={donators.length}/>
        </div>
          {/* <h4 className="font-epilogue font-semibold text-[20px]">
              Creator
          </h4> */}
          <div className="flex flex-row items-center justify-center flex-wrap gap-[14px]">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#b7ccdb] cursor-pointer">
              <img src={profile} alt="user" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div>
              <h4 className="font-epilogue font-semibold text-[14px] break-all">{state.owner}</h4>
            </div>
          </div>
      </div>
      
      <div className="mt-[30px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          {/*Research idea*/}
          <div>
            <h4 className="font-epilogue font-semibold text-[20px]">
                Research idea
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] leading-[26px] text-justify">{state.description}</p> 
            </div>
          </div>
          {/*Donators*/}
          <div>
             {/*Need to implement donators functionality*/}
            <h4 className="font-epilogue font-semibold text-[20px]">
                Backers
            </h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? donators.map( (donator, index) => (
                <div>
                  Donator
                </div>
              )) : (
                <p className="font-epilogue font-normal text-[16px] leading-[26px] text-justify">No backers yet. Be the first one!</p> 
              )}
            </div>
          </div>
        </div>
        
      </div>
        {/*Donate*/}
        <div className="flex-1 flex items-center justify-center">

          <div className="sm:max-w-[600px] mg:w-[60vw] mt-[20px] flex flex-col p-4 bg-[#1a1c1b20] rounded-[3px]">
            <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center ">
              Fund the research!
            </p>
            <div className="mt-[30px]">
              <input 
                type="number" 
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
                bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-[#4b5264]
                 rounded-[10px] mb-4"
                 value={amount}
                 onChange={ (e) => setAmount(e.target.value)}
              />
              <CustomButton 
                btnType="button"
                title="Back Research"
                styles="w-full bg-[#96b6d7ff] transition duration-300 ease-in-out hover:opacity-70"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default CampaignDetails