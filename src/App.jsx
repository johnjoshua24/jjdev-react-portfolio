import "./App.css";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TermsOfService from "./components/TermsofService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";



function App() {
  
const [isLoading, setisLoading] = useState(true);

useEffect(()=>{
  const timer = setTimeout(()=>{
    setisLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
},[]);

useEffect(() => {
  const savedMode = localStorage.getItem("selectedTheme") || "dark";
  document.body.setAttribute("data-theme", savedMode);
}, []);


if(isLoading){
  return <Loading/>;
}


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header/>
                <Hero/>
                <About />
                <Tools />
                <Projects/>
                <Contact />
              </>
            }
          />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
