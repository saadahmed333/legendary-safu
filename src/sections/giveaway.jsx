import React from 'react'
import Verified_Seal from "../assets/images/Verified_Seal.png"
const Giveaway = () => {
  return (
    <div className='bg-[#000000] text-white'>
        <div className='px-[20px] py-[100px]'>
            <h1 className='text-center text-[50px] font-bold'>VULCAN AIRDROP TO LSC HOLDERS</h1>
        <div className='flex justify-between my-[20px]'>
            <div className='text-center'>
                <div className='text-center rounded-2xl border text-[40px] font-bold w-[60px] border-blue-700'>
                    <span>8</span>
                </div>
                <span className='text-center'>Days</span>
            </div>
            <div className='text-center'>
                <div className='text-center rounded-2xl border text-[40px] font-bold w-[60px] border-blue-700'>
                    <span>21</span>
                </div>
                <span className='text-center'>Hours</span>
            </div>
            <div className='text-center'>
                <div className='text-center rounded-2xl border text-[40px] font-bold w-[60px] border-blue-700'>
                    <span>51</span>
                </div>
                <span className='text-center'>Minutes</span>
            </div>
            <div className='text-center'>
                <div className='text-center rounded-2xl border text-[40px] font-bold w-[60px] border-blue-700'>
                    <span>40</span>
                </div>
                <span className='text-center'>Seconds</span>
            </div>
        </div>
        <div className=' flex justify-end'>
            <img className='w-[80px]' src={Verified_Seal} alt="" />
        </div>
        <div>
            
        </div>
        </div>
    </div>
  )
}

export default Giveaway