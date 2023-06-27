import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import {useStateContext} from '../context'
import { DisplayCampaigns } from '../components'

const SearchCampaign = () => {
    const {state} = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const [campaigns, setCampaigns] = useState([])

    const {address, contract, getCampaigns, searchCampaigns} = useStateContext()

    const fetchCampaigns = async () => {
        setIsLoading(true)
        const data = await searchCampaigns(state);
        setCampaigns(data)
        setIsLoading(false)
    }

    useEffect(() => {
        if(contract) fetchCampaigns()
    }, [address, contract, state])
    


    return (
    <DisplayCampaigns
        title={state}
        isLoading={isLoading}
        campaigns={campaigns}
      />
  )
}

export default SearchCampaign