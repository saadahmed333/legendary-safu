import React from "react";
import Verified_Seal from "../assets/images/Verified_Seal.png";
import cartoon1 from "../assets/images/cartoon1.png";
import giveawayBackground from "../assets/bg-images/giveawayBachground.png";
import giveAway from "../assets/images/giveAway.png";
import buy from "../assets/icons&Logos/buy.png";
import arrow from "../assets/icons&Logos/arrow.png";
import safuuClock from "../assets/images/safuuClock.png";
import "../css/giveaway.css";
import Counter from "../components/counter";
const Giveaway = () => {
  const image = `url(${giveawayBackground})`;
  return (
    <div className="text-white">
      <div className="bg-[#000000] text-white pt-[100px] px-[20px]">
        <h1 className="text-center text-[50px] font-bold">
          VULCAN AIRDROP TO <br /> LSC HOLDERS
        </h1>
        <div className="mx-[-20px]">
          <Counter show={false} />
        </div>
        <div className="md:hidden flex justify-end">
          <img className="w-[80px]" src={Verified_Seal} alt="" />
        </div>
        <div className="md:hidden flex justify-center">
          <img className="" src={cartoon1} alt="" />
        </div>
      </div>

      <div className="md:mt-[-66px]">
        <div
          style={{
            backgroundImage: image,
          }}
          className="py-[100px] md:pb-[0px] md:pt-[0px] bg-cover px-[20px] md:px-[0px]"
        >
          <div className="hidden md:flex justify-end pr-[50px]">
            <img className="h-[300px]" src={Verified_Seal} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={giveAway} alt="" />
            </div>
            <div className="bg-[#9b06ea] mt-[100px] w-[300px] sm:w-[400px] text-center font-bold py-[5px] text-[25px]">
              <p>FOLLOW THE STEPS BELOW</p>
            </div>
            <div className="mt-[100px] flex justify-between flex-col md:items-center  md:flex-row px-[20px]">
              <div>
                <div
                  style={{
                    background:
                      "linear-gradient(175.05deg, #07F4EA -0.97%, #07F4EA 28.47%, #04C6BD 68.72%, #004374 113.87%)",
                  }}
                  className="border-[#3b6b81] border-[3px] rounded-xl w-[250px] h-[200px] md:w-[200px] md:h-[180px] lg:w-[250px] lg:h-[200px]"
                >
                  <div className="flex justify-end">
                    <div className="bg-[#9b06ea] flex justify-center items-center w-[60px] h-[60px] rounded-[50%] mt-[-15px] mr-[-20px] border-[#3b6b81] border-[5px]">
                      <p className="font-bold text-[30px]">1</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={buy} alt="" />
                    <p className="text-[25px] lg:text-[30px] font-bold">BUY</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="w-[250px] md:w-[200px] mt-[10px]">
                    Mint or BUY LSC NFT in the secondary market
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:block">
                <img
                  className="w-[80px] h-[40px] rotate-90 md:rotate-0 mt-[20px] mb-[40px] md:md-[0px] md:mb-[0px]"
                  src={arrow}
                  alt=""
                />
              </div>
              <div>
                <div
                  style={{
                    background:
                      "linear-gradient(175.05deg, #07F4EA -0.97%, #07F4EA 28.47%, #04C6BD 68.72%, #004374 113.87%)",
                  }}
                  className="md:ml-[50px] border-[#3b6b81] border-[3px] rounded-xl md:w-[200px] md:h-[180px] lg:w-[250px] lg:h-[200px]"
                >
                  <div className="flex justify-end">
                    <div className="bg-[#9b06ea] flex justify-center items-center w-[60px] h-[60px] rounded-[50%] mt-[-15px] mr-[-20px] border-[#3b6b81] border-[5px]">
                      <p className="font-bold text-[30px]">2</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={buy} alt="" />
                    <p className="text-[25px] lg:text-[30px] font-bold">Hold</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="w-[250px] md:w-[200px] md:ml-[50px] mt-[10px]">
                    Hold the NFT and participate automatically in weekly
                    giveaways
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:block">
                <img
                  className="w-[80px] h-[40px] rotate-90 md:rotate-0 mt-[20px] mb-[40px] md:md-[0px] md:mb-[0px]"
                  src={arrow}
                  alt=""
                />
              </div>
              <div>
                <div
                  style={{
                    background:
                      "linear-gradient(175.05deg, #07F4EA -0.97%, #07F4EA 28.47%, #04C6BD 68.72%, #004374 113.87%)",
                  }}
                  className="md:ml-[50px] border-[#3b6b81] border-[3px] rounded-xl md:w-[200px] md:h-[180px] lg:w-[250px] lg:h-[200px]"
                >
                  <div className="flex justify-end">
                    <div className="bg-[#9b06ea] flex justify-center items-center w-[60px] h-[60px] rounded-[50%] mt-[-15px] mr-[-20px] border-[#3b6b81] border-[5px]">
                      <p className="font-bold text-[30px]">3</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={buy} alt="" />
                    <p className="text-[20px] lg:text-[30px] font-bold">
                      Receive Rewards
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="w-[250px] md:w-[200px] md:ml-[50px] mt-[10px]">
                    Receive rewards weekly in Vulcan and other
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={safuuClock} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giveaway;
