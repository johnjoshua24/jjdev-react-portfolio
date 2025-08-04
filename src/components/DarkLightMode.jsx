import React, { useEffect, useState } from "react";
import "../styles/DarkLightMode.css";

const DarkLightMode = () => {
const savedMode = localStorage.getItem("selectedTheme");

const [IsDarkMode, setIsDarkMode] = useState(() => {
  if (savedMode === "light") return false;
  return true;
});

useEffect(() => {
  if (IsDarkMode) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  }
}, [IsDarkMode]);

const toggleTheme = (e) => {
  setIsDarkMode(!e.target.checked);
};

  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onChange={toggleTheme} checked={!IsDarkMode}/>
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkLightMode;
