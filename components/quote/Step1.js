import React, { useState } from "react";
import Application from "./buttonPages/Application";
import Digital from "./buttonPages/Digital";
import Game from "./buttonPages/Game";
import Graphic from "./buttonPages/Graphic";
import Web from "./buttonPages/Web";

import styles from "../../styles/css/quote.module.css";


const Step1 = ({ formData, setFormData }) => {
  const [hideGraphic, sethideGraphic] = useState(false);
  const [hideApplication, sethideApplication] = useState(false);
  const [hideGame, sethideGame] = useState(false);
  const [hideWeb, sethideWeb] = useState(false);
  const [hideDigital, sethideDigital] = useState(false);

  // hide components 
  const [hideGraphicCompo, sethideGraphicCompo] = useState(true);
  const [hideApplicationCompo, sethideApplicationCompo] = useState(true);
  const [hideGameCompo, sethideGameCompo] = useState(true);
  const [hidewebCompo, sethidewebCompo] = useState(true);
  const [hidedigitalCompo, sethidedigitalCompo] = useState(true);
  const [hideotherCompo, sethideotherCompo] = useState(true);


  const Fooddata = [
    { id: 1, name: "User Experience" },
    { id: 2, name: "Mobile App Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Website Development" },
    { id: 5, name: "Digital Marketing" },
    { id: 6, name: "Other" },
  ];




  const handleClick = (data) => {
    console.log(data, "sdfsadf");
    setFormData({...formData, project:data})
   
  };

  return (
    <>
      <h1
        className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3"
        style={{ background: "#7175e1" }}
      >
        Please select the most suitable option.
      </h1>

      {

        hideGraphicCompo ? 
  
      <div>
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
      </div>
        : <step2/>
    }

      {/* {hideApplicationCompo ?   hideGraphic && <Graphic formData={formData} setFormData={setFormData} /> : null  }

      {  hideGameCompo ? hideApplication && <Application formData={formData} setFormData={setFormData}/> : null}

      {  hidewebCompo ? hideGame && <Game formData={formData} setFormData={setFormData}/> : null}

      {hidedigitalCompo ? hideWeb && <Web formData={formData} setFormData={setFormData}/> :null }

      
      { hideotherCompo ?  hideDigital && <Digital formData={formData} setFormData={setFormData}/> : null}
 */}

    </>
  );
};

export default Step1;
