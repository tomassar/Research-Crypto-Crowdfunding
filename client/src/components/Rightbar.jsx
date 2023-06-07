import React, {useState} from 'react'
import Icon from './Icon'

const Rightbar = () => {

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[90vh]">
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1a1c1b20] w-[200px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3"> 
          Topic list
        </div>
      </div>
    </div>

    
  )
}

export default Rightbar