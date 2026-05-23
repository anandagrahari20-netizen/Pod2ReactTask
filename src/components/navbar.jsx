import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[72px] flex items-center justify-center">

      <div className="w-full max-w-[1280px] flex items-center justify-between px-[40px]">

        <img src="/nike.png" alt="Nike" className="w-[76px] h-[42px] object-contain" />
        

 <ul className="flex gap-[40px] font-['Inter'] text-[16px] font-medium">
     <li>MENU</li>
     <li>LOCATION</li>
    <li>ABOUT</li>
   <li>CONTACT</li>
        </ul>

       
        <button className="w-[75px] h-[31px]  bg-[#D01C28] text-white font-semibold text-[16px] py-[6px] px-[16px]  ">
          Login</button>

      </div>
    </nav>
  );
};

export default Navbar;