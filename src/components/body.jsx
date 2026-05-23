import React from "react";

const Body = () => {
  return (
    <section className="w-full h-[613px] w-[1125px] flex justify-center mt-[60px]">

      <div className="w-full max-w-[1280px] flex items-center justify-between px-[40px]">

        <div className="max-w-[595px] flex flex-col gap-[36px] ml-18">

          <h1 className="font-['Poppins'] font-extrabold text-[90px] leading-[90px] uppercase">
            YOUR FEET DESERVE THE BEST</h1>

          <p className="max-w-[404px] font-['Poppins'] font-semibold text-[16px] text-[#5A5959] leading-[24px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>

    
          <div className="flex gap-[40px]">

            <button className="w-[150px] h-[41px] bg-[#D01C28] text-white font-semibold">
              Shop Now
            </button>

            <button className="w-[141px] h-[41px] border border-[#5A5959] text-[#5A5959] font-semibold">
              Category
            </button>

          </div>

        
         <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] text-[#5A5959]">
              Also Available Ons  </p>

            <div className="flex gap-[16px]">

              <img src="/flipkart.png" className="w-[32px] h-[32px]"/>
            <img src="/amazon.png" className="w-[32px] h-[32px]"/>

            </div>
          </div>
        </div>

        
        <div className="w-[530px] h-[487px] flex items-center justify-center">

          <img
            src="/shoe.png"
            alt="shoe"
            className="w-full h-full object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Body;