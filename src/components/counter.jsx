import React from 'react'
import sickle from "../assets/images/sickle.png"
const Counter = ({show}) => {
  return (
    <div className="relative mt-[50px] px-[0px]">
          <div className="hidden sm:block bg-[#9B06EA] sm:h-[40px]">{ show && <div className='z-0 hidden md:block absolute bottom-[-30px] left-5'><img src={sickle} alt="" /></div>}</div>
          <div className="sm:mt-[-70px]">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="data-box bg-[#000000] sm:mr-[5px] text-center rounded-2xl border text-[40px] sm:text-[50px] w-[70px] sm:w-[100px] md:w-[130px] sm:h-[100px] md:h-[110px] flex justify-center items-center  font-bold border-blue-700">
                  <span>8</span>
                </div>
                <span className="text-center">Days</span>
              </div>
              <div className="text-center ml-[20px]">
                <div className="data-box bg-[#000000] sm:mr-[5px] text-center rounded-2xl border text-[40px] sm:text-[50px] w-[70px] sm:w-[100px] md:w-[130px] md:h-[110px] flex justify-center items-center sm:h-[100px] font-bold border-blue-700">
                  <span>21</span>
                </div>
                <span className="text-center">Hours</span>
              </div>
              <div className="text-center ml-[20px]">
                <div className="data-box bg-[#000000] sm:mr-[5px] text-center rounded-2xl border text-[40px] sm:text-[50px] w-[70px] sm:w-[100px] md:w-[130px]  md:h-[110px] flex justify-center items-center sm:h-[100px] font-bold border-blue-700">
                  <span>51</span>
                </div>
                <span className="text-center">Minutes</span>
              </div>
              <div className="text-center ml-[20px]">
                <div className="data-box bg-[#000000] sm:mr-[5px] text-center rounded-2xl border text-[40px] sm:text-[50px] w-[70px] sm:w-[100px] md:w-[130px] md:h-[110px] flex justify-center items-center sm:h-[100px] font-bold border-blue-700">
                  <span>40</span>
                </div>
                <span className="text-center">Seconds</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Counter