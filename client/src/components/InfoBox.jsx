import React from 'react'

const InfoBox = ({title, value}) => {
  return (
    <div className="flex items-center">
        <div className="bg-[#cacfc9] w-[80px]">
            <h4 className="font-epilogue font-bold text-[30px] text-center p-3 rounded-[4px] ">
                {value}
            </h4>
        </div>
        <div className="flex-1 ml-3">
            <p className="font-epilogue font-normal text-[17px] text-[#00000090] py-2 w-full text-center">{title}</p>
        </div>
    </div>
  )
}

export default InfoBox