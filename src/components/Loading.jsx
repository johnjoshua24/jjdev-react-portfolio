import React, { useEffect, useState } from "react";
import "../styles/Loading.css";
import '../globals/global.css'


  const titles = ["WELCOME TO", "JJDEV", "PORTFOLIO"];

const Loading = () => {

  const [titleIndex, settitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeTimeout;

    const interval = setInterval(() => {
      setFade(false);

      fadeTimeout = setTimeout(() => {
        settitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 300);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <div className="loading-container flex flex-col items-center justify-center fixed inset-0">
      <div className="loading-title flex flex-col items-center justify-center">
        <h1
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {titles[titleIndex]}
        </h1>
      </div>
      <div className="loading-bar-container flex flex-col items-center justify-center">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default Loading;
