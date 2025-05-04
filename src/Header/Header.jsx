import React, { useState } from "react";
import "./head.css"; // همین کافیه برای اعمال CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <>
      {/* دکمه منو همبرگری */}
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed top-5 right-10 z-50 flex items-center justify-center w-[60px] h-[50px] md:hidden cursor-pointer bg-gray-400 rounded-sm"
      >
        <span className="text-white  text-2xl ">Menu</span>
      </div>

      {/* باکس منوی موبایل */}

      <div
        className={`MasterBox fixed top-0 left-0 w-full h-full bg-white p-6! rounded shadow text-center text-black z-51 md:hidden transition-all duration-300 ease-in-out transform flex flex-col ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="CloseBox w-[100%] h-[8%] flex justify-end items-center "
        >
          <div className=" w-[90%] h-[100%]">
            <p className="flex justify-start items-center w-full h-full pl-4! text-2xl">
              close menu
            </p>
          </div>
          <button className="Croxx w-[15%] h-[100%] text-6xl text-black cursor-pointer  flex justify-center items-center ">
            ×
          </button>
        </div>
        <div className="BoxMenu w-full h-[80%]  flex flex-col">
          <div className=" w-[100%] h-[10%]">
            <p className="FirstBox-Menu flex justify-start items-center w-full h-full pl-4! text-2xl">
              Home
            </p>
          </div>
          <div className=" w-[100%] h-[10%]">
            <p className="flex justify-start items-center w-full h-full pl-4! text-2xl ">
            SERVICES
            </p>
          </div>
          <div className=" w-[100%] h-[10%]">
            <p className="flex justify-start items-center w-full h-full pl-4! text-2xl ">
            PROJECT
            </p>
          </div>
          <div className=" w-[100%] h-[10%]">
            <p className="flex justify-start items-center w-full h-full pl-4! text-2xl ">
            CONTACT
            </p>
          </div>
          <div className="MySmall-Box-Menu  w-[100%] h-[30%] flex justify-center items-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div  className="MySmall-Logo-Menu  w-[100%] h-[30%] flex justify-start items-center " >
          <svg
      className="w-[50%] h-[50%]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 557.1 180.1"
      fill="none"
    >
      <g>
        <path
          className="letter letter-r"
          fill="#124026"
          d="M3,178V3h18.5v175H3z M112.2,178H91L30,90.2h2.5c8.5,0,16.4-1.8,23.7-5.2s13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6S97.6,62.5,93.3,69S83.2,80.6,75.7,84.4s-15.8,5.7-25,5.9L112.2,178z"
        />
        <path
          className="letter letter-i"
          fill="#124026"
          d="M124.7,3h18.5v175h-18.5V3z"
        />
        <path
          className="letter letter-e"
          fill="#124026"
          d="M261.9,173.5v4.5h-90V3h87.5v4.5h-69v77.2h63.7v4.5h-63.7v84.2L261.9,173.5L261.9,173.5z"
        />
        <path
          className="letter letter-r-2"
          fill="#124026"
          d="M284.2,178V3h18.5v175H284.2z M374.1,150.4l19.3,27.6h-21.2l-61-87.7h2.5c8.5,0,16.4-1.8,23.7-5.2c7.3-3.5,13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6s-2.1,15.8-6.4,22.2s-10.1,11.6-17.6,15.4s-15.8,5.7-25,5.9L374.1,150.4"
        />
        <path
          className="letter letter-a "
          fill="#124026"
          d="M536.4,178l-20-62h-73.7l-20,62h-17.8L461.6,3h17.2l-34.7,108.5h71L480.1,3h18.2l56.5,175H536.4z"
        />
      </g>
    </svg>
          </div>
        </div>
      </div>

      {/* منوی دسکتاپ */}
      <header className="w-full h-[10vh] flex justify-center items-center text-2xl border-b border-white">
        <ul className="w-1/2 h-full flex text-white max-md:hidden">
          <li className="w-1/4 h-full flex justify-center text-black bg-white items-center border-x border-white">
            HOME
          </li>
          <li className="w-1/4 h-full flex justify-center items-center border-x border-white hover:bg-white hover:text-black transition">
            SERVICES
          </li>
          <li className="w-1/4 h-full flex justify-center items-center border-x border-white hover:bg-white hover:text-black transition">
            PROJECT
          </li>
          <li className="w-1/4 h-full flex justify-center items-center border-x border-white hover:bg-white hover:text-black transition">
            CONTACT
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
