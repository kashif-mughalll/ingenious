import React,{useEffect} from "react";
import "./Loader.css";
import AOS from "aos";
import "aos/dist/aos.css";

var Loader = ({}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-cont-32" data-aos="fade-up">
        <h1 className="loader-text">Loading...</h1>
        <div className="loader-wrapper">
          <div className="loading"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
