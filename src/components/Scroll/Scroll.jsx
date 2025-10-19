"use client"
import { Mouse } from "lucide-react";
import React, { useState } from "react";

const Scroll = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    if (!isBottom) {
   
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
   
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsBottom(!isBottom);
  };

  return (
    <div
      onClick={handleScroll}
      className="fixed top-[50%] sm:right-5 right-2 cursor-pointer animate-pulse bg-gray-800 text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
    >
      <Mouse size={20}/>
    </div>
  );
};

export default Scroll;
