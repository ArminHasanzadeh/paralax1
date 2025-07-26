import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="w-[100%] h-[25vh]  flex  max-sm:hidden">
        <div className="BoxSize"></div>
        <div className="flex justify-start items-center LogoRiera flex-col">
          <svg
            className="w-[100%] h-[40%] "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 557.1 180.1"
            fill="none"
          >
            <g>
              <path
                className="letter letter-r"
                fill="white"
                d="M3,178V3h18.5v175H3z M112.2,178H91L30,90.2h2.5c8.5,0,16.4-1.8,23.7-5.2s13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6S97.6,62.5,93.3,69S83.2,80.6,75.7,84.4s-15.8,5.7-25,5.9L112.2,178z"
              />
              <path
                className="letter letter-i"
                fill="white"
                d="M124.7,3h18.5v175h-18.5V3z"
              />
              <path
                className="letter letter-e"
                fill="white"
                d="M261.9,173.5v4.5h-90V3h87.5v4.5h-69v77.2h63.7v4.5h-63.7v84.2L261.9,173.5L261.9,173.5z"
              />
              <path
                className="letter letter-r-2"
                fill="white"
                d="M284.2,178V3h18.5v175H284.2z M374.1,150.4l19.3,27.6h-21.2l-61-87.7h2.5c8.5,0,16.4-1.8,23.7-5.2c7.3-3.5,13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6s-2.1,15.8-6.4,22.2s-10.1,11.6-17.6,15.4s-15.8,5.7-25,5.9L374.1,150.4"
              />
              <path
                className="letter letter-a "
                fill="white"
                d="M536.4,178l-20-62h-73.7l-20,62h-17.8L461.6,3h17.2l-34.7,108.5h71L480.1,3h18.2l56.5,175H536.4z"
              />
            </g>
          </svg>
          <p className="text-white text-1xl  text-start">
            LANDSCAPE STUDIO & GRADEING SERVICES DES DE 1980
          </p>
        </div>
        <div className="BoxSize2"></div>
        <div>
          <div className="flex-col NumberCall flex justify-center ">
            <div>
              <p>HEADQUARTERS RAFAEL BATLLE 18 ,</p>
              <p className="barcelona w-[50%] flex-col flex overflow-hidden">
                BARCELONA
                <span className="border-b-2 w-[100%] h-[1px]"></span>
              </p>
              <p className="barcelona w-[100%] flex-col flex overflow-hidden">
                (+34) 932 030 839
                <span className="border-b-2 w-[100%] h-[1px]"></span>
              </p>
            </div>
            <div>
              <p>FLOWER SHOP PEDRO DE LA CREU 19 ,</p>
              <p className="barcelona w-[50%] flex-col flex overflow-hidden">
                BARCELONA <span className="border-b-2 w-[100%] h-[1px]"></span>
              </p>
              <p className="barcelona w-[100%] flex-col flex overflow-hidden">
                (+34) 932 805 495{" "}
                <span className="border-b-2 w-[100%] h-[1px]"></span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex-col NumberCall2 flex justify-start items-center">
          <div className=" flex-col  flex justify-center items-start MobileFooter-Box4 text-2xl text-white">
            <a
              href={
                "https://www.instagram.com/armin__hasnzadeh?igsh=cndnejBxcXo5cTh6"
              }
            >
              {" "}
              Instagram
            </a>
            <a href={"https://github.com/ArminHasanzadeh"}> Github</a>
            <a
              href={
                "https://www.linkedin.com/in/armin-hasanzadeh-687554333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              {" "}
              Linkdin
            </a>
            <p>Armin.king15h@gmail</p>
            <p>Designed by Armin Hasanzadeh</p>
          </div>
        </div>
        <div className="BoxSize"></div>
      </footer>
      <div className="MobileFooter hidden w-[90%] h-[80vh]  max-sm:flex m-6! overflow-y-hidden flex-col ">
        <div className="MobileLogo w-full h-[30%] border-2 flex justify-start items-start p-2! flex-col">
          <svg
            className="w-[40%] h-[40%]  "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 557.1 180.1"
            fill="none"
          >
            <g>
              <path
                className="letter letter-r"
                fill="white"
                d="M3,178V3h18.5v175H3z M112.2,178H91L30,90.2h2.5c8.5,0,16.4-1.8,23.7-5.2s13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6S97.6,62.5,93.3,69S83.2,80.6,75.7,84.4s-15.8,5.7-25,5.9L112.2,178z"
              />
              <path
                className="letter letter-i"
                fill="white"
                d="M124.7,3h18.5v175h-18.5V3z"
              />
              <path
                className="letter letter-e"
                fill="white"
                d="M261.9,173.5v4.5h-90V3h87.5v4.5h-69v77.2h63.7v4.5h-63.7v84.2L261.9,173.5L261.9,173.5z"
              />
              <path
                className="letter letter-r-2"
                fill="white"
                d="M284.2,178V3h18.5v175H284.2z M374.1,150.4l19.3,27.6h-21.2l-61-87.7h2.5c8.5,0,16.4-1.8,23.7-5.2c7.3-3.5,13.2-8.5,17.6-15.1c4.4-6.6,6.6-14.3,6.6-23.1c0-12.7-4.2-22.8-12.6-30.5c-8.4-7.7-18.9-12-31.4-13V3h11.8c9.7,0,18.4,1.9,26.2,5.6c7.8,3.8,14,8.9,18.5,15.5s6.8,14.1,6.8,22.6s-2.1,15.8-6.4,22.2s-10.1,11.6-17.6,15.4s-15.8,5.7-25,5.9L374.1,150.4"
              />
              <path
                className="letter letter-a "
                fill="white"
                d="M536.4,178l-20-62h-73.7l-20,62h-17.8L461.6,3h17.2l-34.7,108.5h71L480.1,3h18.2l56.5,175H536.4z"
              />
            </g>
          </svg>
          <div className="w-[40%] h-[60%] text-white flex mt-4! ml-2!">
            <p>LANDSCAPE STUDIO & GRADEING SERVICES DES DE 1980</p>
          </div>
        </div>

        <div className="w-full h-[30%] border-2 pl-2! text-white">
          <div className=" w-[50%] h-[100%]">
            <p>HEADQUARTERS RAFAEL BATLLE 18 ,</p>
            <p>BARCELONA</p>
            <p>(+34) 932 030 839</p>
          </div>
        </div>
        <div className="w-full h-[30%] border-2">
          <ul className="w-full h-full flex text-white ">
            <li className="w-1/4 h-full flex justify-center  items-center border-x border-white  hover:bg-white hover:text-black transition">
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
        </div>
        <div className="MobileFooter-Box4 w-full h-[30%] border-2 flex justify-center items-start flex-col text-2xl text-white">
          <a
            href={
              "https://www.instagram.com/armin__hasnzadeh?igsh=cndnejBxcXo5cTh6"
            }
          >
            {" "}
            Instagram
          </a>
          <a href={"https://github.com/ArminHasanzadeh"}> Github</a>
          <a
            href={
              "https://www.linkedin.com/in/armin-hasanzadeh-687554333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          >
            {" "}
            Linkdin
          </a>
          <p>Armin.king15h@gmail</p>
          <p>Designed by Armin Hasanzadeh</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
