import React, { useEffect, useRef } from "react";

const ScrolTextTrack = ({ scrollTop }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateX(-${scrollTop *0.5 }px)`;
    }
  }, [scrollTop]);

  return (
    <section className="mb-44!">
    <div className="w-full overflow-hidden py-4 flex justify-center">
        <div className="marquee">
          <div className="marquee-content">
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
       
          </div>
        </div>
      </div>
    <section className="w-full h-[20vh] text-white overflow-hidden flex justify-center items-center">
      <div
        ref={scrollContainerRef}
        className="flex gap-20 whitespace-nowrap will-change-transform transition-transform duration-500 ease-out"
      >
        <h2 className="text-5xl md:text-7xl font-bold uppercase">
          Designing nature since 1980
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold uppercase">
          Designing nature since 1980
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold uppercase">
          Designing nature since 1980
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold uppercase">
          Designing nature since 1980
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold uppercase">
          Designing nature since 1980
        </h2>
      </div>
    </section>
    <div className="w-full overflow-hidden py-4 flex justify-center">
        <div className="marquee">
          <div className="marquee-content">
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
            <p className="text-white text-4xl font-bold uppercase">
              Landscape Studio & Gardening Services
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrolTextTrack;
