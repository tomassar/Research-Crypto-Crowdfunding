import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button 
      type={btnType}
      className={`font-epilogue font-semibold text-[15px] leading-[26px] min-h-[52px] px-4 rounded-[4px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton