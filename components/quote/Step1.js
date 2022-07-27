import React, { useState } from "react";
import Application from "./buttonPages/Application";
import Digital from "./buttonPages/Digital";
import Game from "./buttonPages/Game";
import Graphic from "./buttonPages/Graphic";
import Web from "./buttonPages/Web";

import styles from '../../styles/css/quote.module.css'

const Step1 = ({ formData, setFormData }) => {
  const [hideGraphic, sethideGraphic] = useState(false);
  const [hideApplication, sethideApplication] = useState(false);
  const [hideGame, sethideGame] = useState(false);
  const [hideWeb, sethideWeb] = useState(false);
  const [hideDigital, sethideDigital] = useState(false);

  const [hideCompo, sethideCompo] = useState(false);


  const Fooddata = [
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "App Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Web Development" },
    { id: 5, name: "Digital Development" },
    { id: 6, name: "Other" },
  ];



  const handleClick = (data) => {
    console.log(data,"sdfsadf");

    if(data === "Graphic Design") {
      sethideGraphic(true);
      sethideCompo(false)
      
    }
    else if(data === "App Development") {
      sethideApplication(true);
    }
    else if(data === "Game Development") {
      sethideGame(true);
    }
    else if(data === "Web Development") {
      sethideWeb(true);
    }
    else if(data === "Digital Development") {
      sethideDigital(true);
    }
    else if(data === "Other") {
      return <h1>other component</h1>
    }

  

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


{
  hideGraphic  && <Graphic/>
}

{
  hideApplication  && <Application/>
}

{
  hideGame  && <Game/>
}

{
  hideWeb  && <Web/>
}
{
  hideDigital  && <Digital/>
}




    
      
   
       
    
  

   
    </>
  );
};

export default Step1;
