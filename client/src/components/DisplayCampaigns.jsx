import React from 'react'
import { useNavigate } from 'react-router-dom'

import {CampaignCard} from '../components'
import {loader} from '../assets'

const DisplayCampaigns = ({title, isLoading, campaigns, search}) => {
    const navigate = useNavigate()

    //To improve code readability
    const handleNavigate = (campaign) => {
        //New react router allows to pass state directly through routes
        navigate(`/campaign-details/${campaign.title}`, {state: campaign})
    }

    return (
    <div>
        <h1 className="font-epilogue font-semibold text-[17px] text-left">{title} ({campaigns.length})</h1>
        {/* Loader */}
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
            {isLoading && (
                <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain"/>
            )}

            {!isLoading && campaigns.length === 0 && (
                <p className="font-epilogue font-semibold text-[13px] leading-[30px]">You have not created any campaigns yet</p>
                )}

            {!isLoading && campaigns.length > 0 && campaigns.map( (campaign) => <CampaignCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
                />)}
        </div>
    </div>
  )
}

export default DisplayCampaigns