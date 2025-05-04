import React, { useEffect, useRef, useState } from "react";
import Pic1 from "../../../public/pic (1).jpg";
import Pic2 from "../../../public/pic (2).jpg";
import Pic3 from "../../../public/pic (3).jpg";
import Pic4 from "../../../public/pic (4).jpg";
import Pic5 from "../../../public/pic (5).jpg";
import Pic6 from "../../../public/pic (6).jpg";

const Scrolimg = ({ scrollTop }) => {
  const scrollContainerRef = useRef(null);
  const [transformValue, setTransformValue] = useState(0);
  console.log(scrollTop);
  

  useEffect(() => {
    
    const transitionValue = Math.max(0, scrollTop);
    setTransformValue(transitionValue);
  }, [scrollTop]);

  return (
    <section className="h-[70vh] w-full overflow-hidden mb-32!">
      <div
        className="flex gap-20 will-change-transform transition-transform duration-[1000ms] ease-out"
        ref={scrollContainerRef}
        style={{ transform: `translateX(-${transformValue}px)` }}
      >
        {[Pic1, Pic2, Pic3, Pic4, Pic5, Pic6].map((pic, index) => (
          <figure
            key={index}
            className="shrink-0 w-[40vw] h-[60vh] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={pic}
              alt={`pic-${index + 1}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Scrolimg;
