import React from "react";
import backgroundMoon from "../assets/bg-images/background-moon.png";
import hammer from "../assets/images/hummer.png";
import Counter from "../components/counter";
const Games = () => {
  const moonBackground = `url(${backgroundMoon})`;
  return (
    <div className="bg-black h-[100vh] mt-[-50px] text-white">
      <div
        style={{
          backgroundImage: moonBackground,
          backgroundSize: "cover",
        }}
        className="h-[100vh]"
      >
        <div className="pt-[100px]">
          <h1 className="text-center text-[40px] md:text-[60px] italic font-bold">
            Next VUL Giveaway
          </h1>
          <div>
            <Counter show={true} />
          </div>
        </div>

        <div className="flex justify-center mt-[100px]">
          <a
            href="#"
            className="z-0 bg-[#ab40f5] w-[300px] text-[40px] font-bold flex justify-center border-none outline-none hover:duration-300 hover:ease-in-out hover:bg-[#9b06ea]"
          >
            BUY NOW
          </a>
        </div>
        <div className="hidden md:flex justify-end mt-[-170px] z-50 lg:mr-[50px]">
          <img src={hammer} alt="" />
        </div>


        <div className="flex justify-center">
           <div className="max-w-[1200px] w-[100%]">
            <h1 className="text-[30px] italic font-bold">GAMES</h1>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
