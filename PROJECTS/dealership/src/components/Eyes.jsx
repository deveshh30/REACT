

import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;   //innert widthh divide by 2 gives you the orgin axis horizontally
      let deltaY = mouseY - window.innerHeight / 2;  // inner height divide by 2 gives you the orgiin coordinate vertically

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen eyes">
      <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover relative h-full w-full bg-center">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="h-[15vw] w-[15vw] rounded-full flex items-center justify-center bg-white"
            >
              <div className="bg-black h-2/3 w-2/3 rounded-full flex items-center justify-center relative">
                <div
                  className="absolute w-full h-10 flex items-center"
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <div className="bg-white h-10 w-10 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Eyes;
