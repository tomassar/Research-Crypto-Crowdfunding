//Wrap the app with this context so that every page and component can use it
import React, {useContext, createContext} from 'react'
import {useAddress, useContract, useMetamask, useContractWrite, useContractRead} from '@thirdweb-dev/react'
import {ethers} from 'ethers'

// Create a new context 
const StateContext = createContext()

// Create a context provider component
export const StateContextProvider = ({children}) => {
    // Use hooks to access necessary data and functions
    const {contract} = useContract("0xAE78954Ba5a25EC9003F5b98EEF0c3195ed39fBc");
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign')
    const {mutateAsync: donateToCampaign} = useContractWrite(contract, 'donateToCampaign')
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

    // Define logic necessary to get only one user's campaigns
    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();

        const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address)
        return filteredCampaigns;
    }

    const donate = async (pId, amount) => {
        const data = await contract.call('donateToCampaign', [pId], { value: ethers.utils.parseEther(amount)});
        //const data = await donateToCampaign({ args: [pId]}, {value: ethers.utils.parseEther(amount)});

        return data
    }

    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators', [pId])
        const numberOfdonations = donations[0].length
        const parsedDonations = []

        for(let i=0; i<numberOfdonations; i++){
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }

        return parsedDonations;
    }

    // Provide the context values to the components
    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                publishCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

// Create a custom hook to access the context values
export const useStateContext = () => useContext(StateContext )