import React from "react";
import "./master.css";

function Master() {
  
  return (
    <>
    <section id="master-box" className="w-full h-[90vh] flex justify-center gap-10 mt-44!">
      <div id="box1" className="w-[65%] h-[100%] flex flex-col ">
        <div className="onther-box w-full h-[20%]"></div>
        <div className=" text-white w-[80%] h-[80%] flex justify-end font-bold text-2xl flex-col">
          <p className="flex items-end justify-end ">
            At Riera, we transform every corner of your outdoor space into a
            place to live and enjoy. With over 40 years of experience and a
            constant passion for innovation, we design gardens and terraces that
            combine functionality with beauty, creating environments that invite
            you to breathe, reconnect, and live better.
          </p>
          <br />
          <br />
          Let yourself be inspired by our projects, where nature comes to life
          and every detail is crafted to integrate well-being and balance into
          your daily life. A unique experience that turns your outdoor space
          into a true retreat.
        </div>
      </div>
      <div id="box2" className="w-[30%] h-[100%]">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    
   </>
  );
}

export default Master;
