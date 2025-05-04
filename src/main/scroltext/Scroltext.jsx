import React, { useRef, useEffect, useState } from "react";

const Scroltext = ({ scrollTop }) => {
  const textRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(50);

  useEffect(() => {
    if (textRef.current) {
      const sectionTop = textRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, 2 - (sectionTop - scrollTop) / windowHeight);

      setOpacity(progress);
      setTranslateY((1 - progress) * 50);
    }
  }, [scrollTop]);

  return (
    <section className="w-full h-[50vh] flex  justify-center items-center text-white px-8 ">
      <div
        ref={textRef}
        className="max-w-4xl text-center transition-all duration-700"
        style={{
          opacity: opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Crafting Timeless Spaces
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          We believe in architecture that tells a story, blending modernity with tradition to create meaningful environments.
        </p>
      </div>
    </section>
  );
};

export default Scroltext;
