//Wrap the app with this context so that every page and component can use it
import React, {useContext, createContext} from 'react'
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react'
import {ethers} from 'ethers'

// Create a new context 
const StateContext = createContext()

// Create a context provider component
export const StateContextProvider = ({children}) => {
    // Use hooks to access necessary data and functions
    const {contract} = useContract("0xAE78954Ba5a25EC9003F5b98EEF0c3195ed39fBc");
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign')
    const address = useAddress();
    const connect = useMetamask();

    // Define logic neccesary to publish campaign
    const publishCampaign = async (form) => {
        try{
            const data = await createCampaign({ args: [
                address, //owner
                form.title, 
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ]
        })
            console.log("Contract call success", data);
        } catch(error){
            console.log("Contract call failure", error);
        }
    }

    // Define logic necessary to get campaigns
    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns')
        
        //Parse campaigns to make it human readable
        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }))

        return parsedCampaigns
    }

    // Provide the context values to the components
    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                publishCampaign,
                getCampaigns
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

// Create a custom hook to access the context values
export const useStateContext = () => useContext(StateContext )