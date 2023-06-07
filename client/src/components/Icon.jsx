import React from 'react'

const Icon = ({name, imgUrl, handleClick, disabled, isActive, styles}) => (
    <div className={`w-[48px] h-[48px] rounded-[50px] ${isActive && isActive === name && 'bg-[#8fccae90]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-2/2 h-2/2"/>
      ): (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
      )}
    </div>
  )

export default Icon