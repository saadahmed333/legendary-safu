import React from "react";
import aboutBackground from "../assets/bg-images/aboutBackground.png";
import videoImage from "../assets/images/videoImage.png";
import cartoon1 from "../assets/images/cartoon1.png";
const About = () => {
  const background_Image = `url(${aboutBackground})`;
  return (
    <div
      style={{
        backgroundImage: background_Image,
      }}
      className="w-[100%] bg-cover mt-[-150px] sm:mt-[-220px] md:mt-[-150px] text-white flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-[100%] mt-[0px] md:mt-[100px] py-[100px] px-[30px]">
        <div className="flex flex-col">
          <div className="text-center md:text-start text-[30px] md:text-[50px] font-extrabold leading-[40px] md:leading-[55px]">
            <h1
              style={{
                backgroundImage: "linear-gradient(to bottom, #07f4ea, #d7fffe)",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              About
            </h1>
            <div>
              <h1>
                Legendary <br /> Safuu Club!
              </h1>
            </div>
          </div>

          <div className="mt-[80px] md:flex justify-center items-center">
            <div className="md:w-[50%] mt-[40px] md:mt-[0px]">
              <h1 className="text-[20px] font-bold leading-7">
                Legendary Safuu Club is the first NFT project to be introduced
                by Legendary Labs
              </h1>
              <p className="text-[20px] italic font-normal leading-7">
                The creators of LSC NFT’s are die-hard VULCAN blockchain
                believers.
              </p>
              <p className="mt-[30px] text-[20px] font-light text-[#eeedf0]">
                <u>As LSC holders we believe that :</u> <br /> Safuu protocol
                has delivered proof that rebasing can be sustainable when
                coupled with the right execution and mechanisms in place to
                maintain price. The idea of LSC is born to become the largest
                “Whale Wallet” and reward holders weekly with the rebases in
                giveaways.
              </p>
            </div>

            <div className="md:w-[50%] mt-[50px] md:mt-[0px]">
              <img src={videoImage} alt="" />
            </div>
          </div>

          <div className="md:flex justify-center items-center">
            <div className="md:w-[50%] mt-[50px] md:mt-[0px] flex justify-center">
              <img src={cartoon1} alt="" />
            </div>
            <div className="md:w-[50%]">
              <p className="mt-[30px] text-[18px] font-light text-[#eeedf0] leading-7">
                Legendary Labs understands that not everyone can afford to be a
                Vulcan Whale … by becoming a LSC Community NFT Holder you will
                be the biggest whale now .. and are automatically enrolled in
                weekly Vulcan giveaways ! LSC NFT Holders will have much more
                benefit in the upcoming future with the Launch of Vulcan and our
                NFT Launchpad on the Worlds First rebasing blockchain.
              </p>
              <h1 className="mt-[30px] text-[20px] font-bold leading-6">
                The NFT’s that let you WIN BIG every week !
              </h1>
              <p className="mt-[30px] text-[18x] font-light text-[#eeedf0] leading-6">
                LSC NFT’s are made for the SAFUU Community and others, by the
                Safuu community!
              </p>
              <h1 className="mt-[30px] text-[20px] font-bold leading-6">
                Let’s become WALLET NUMBER #4 TOGETHER !!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
