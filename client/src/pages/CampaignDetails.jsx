import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {ethers} from 'ethers'

import {useStateContext} from '../context'
import {CustomButton, InfoBox, Loader} from '../components'
import {calculateProgressPercentage, calculateDaysLeft} from '../utils'
import {profile} from '../assets'

// Component that shows every detail of each component
const CampaignDetails = () => {
  const {state} = useLocation();
  const navigate = useNavigate()
  const {donate, getDonations, contract, address} = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [amount, setAmount] = useState(0)
  const [donators, setDonators] = useState([])

  const daysLeft = calculateDaysLeft(state.deadline)

  const fetchDonators = async () => {
    const data = await getDonations(state.pId)
    setDonators(data)
  }

  //Call fetchDonators as soon as page loads
  useEffect(() => {
    if(contract) fetchDonators()
  }, [contract, address, amount])
  

  const handleDonate = async () => {
    setIsLoading(true)

    await donate(state.pId, amount)
    navigate('/')
    setIsLoading(false)
  }

  console.log(state);
  return (
    <div>
      {/*Loader when donating*/}
      {isLoading && <Loader/>}
        <h1 className="font-epilogue font-bold text-[30px]">{state.title}</h1>
        {/*Bar that shows progress*/}
        <div className="relative w-full h-[10px] rounded-[10px] bg-[#f2f3f4] mt-2">
          <div className='absolute h-full bg-[#b7ccdb] rounded-[10px]' style={{width: `${calculateProgressPercentage(state.target, state.amountCollected)}%`, maxWidth:'100%'}}></div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-epilogue font-[15px] font-semibold ">{state.amountCollected} ETH</p>
          <p className="font-epilogue font-[15px] font-semibold ">{state.target} ETH</p>
        </div>
        {/*Campaign image*/}
      <div className="w-full flex md:flex-row flex-col my-4 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="Campaign image" className="w-full h-[410px] object-cover rounded-[2px]"/>
        </div>
      </div>
      {/*Little boxes of information*/}
      <div className="flex flex-wrap gap-7 justify-evenly">
        <div className="flex flex-wrap gap-7 justify-between">
          <InfoBox title="Days left" value={daysLeft}/>
          <InfoBox title="Total donators" value={donators.length}/>
        </div>
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
              {donators.length > 0 ? donators.map( (item, index) => (
                <div key={`${item.donator}-${index}`} className="flex justify-beween items-center gap-4">
                  <p className="font-epilogue font-normal text-[16px] leading-[26px] break-all">{index+1}. {item.donator}</p>
                  <p className="font-epilogue font-normal text-[16px] leading-[26px] break-all">{item.donation} ETH</p>
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