import React, { useState } from "react";
import Application from "./buttonPages/Application";
import Digital from "./buttonPages/Digital";
import Game from "./buttonPages/Game";
import Graphic from "./buttonPages/Graphic";
import Web from "./buttonPages/Web";

import styles from '../../styles/css/quote.module.css'

const Step1 = ({ formData, setFormData }) => {
  const [state, setState] = useState("Graphic Design");

  const Fooddata = [
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "App Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Web Development" },
    { id: 5, name: "Digital Development" },
    { id: 6, name: "Other" },
  ];

  const pageDisplay = () => {
    if (Fooddata == 0) {
      return <Step1 />;
    } else if (Fooddata == 1) {
      return <Application />;
    } else if (Fooddata == 2) {
      return <Digital />;
    } else if (Fooddata == 3) {
      return <Game />;
    } else if (Fooddata == 4) {
      return <Web />;
    }
  };

  const handleClick = (data) => {
    console.log(data);

    setState(true  );
  };

  return (
    <>
    
     
          <h1 className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3" style={{background: "#7175e1"}}> Please select the most suitable option.</h1>

          <div className="quoteForm d-flex justify-content-center justify-content-center ">
            <div className="w-100">
              <div className="row row-cols-2 g-3 justify-content-center">
                {Fooddata.map((item) => (
                  <div className="col" key={item.id}>
                    <button
                      className={styles.qbutton}
                      onClick={() => handleClick(item.name)}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
      
   
       
    
  

   
    </>
  );
};

export default Step1;
