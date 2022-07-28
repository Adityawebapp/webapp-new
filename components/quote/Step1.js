import React, { useState } from "react";
import { motion } from "framer-motion";

import Application from "./buttonPages/Application";
import Digital from "./buttonPages/Digital";
import Game from "./buttonPages/Game";
import Graphic from "./buttonPages/Graphic";
import Web from "./buttonPages/Web";

import styles from "../../styles/css/quote.module.css";
import Step2 from "./Step2";

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
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "App Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Web Development" },
    { id: 5, name: "Digital Development" },
    { id: 6, name: "Other" },
  ];



  const handleClick = (data) => {
    console.log(data, "sdfsadf");
    setFormData({ ...formData, project: data });

   
    if (data.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
    }

    // if (data === "Graphic Design") {

    //   sethideGraphicCompo(false);

    // } else if (data === "App Development") {

    //   sethideApplicationCompo(false)
    //   sethideGraphicCompo(false);

    // } else if (data === "Game Development") {

    //   sethideGraphicCompo(false);

    //   sethideGameCompo(false)
    // } else if (data === "Web Development") {
    //   sethideWeb(true);
    //   sethideGraphicCompo(false);

    // } else if (data === "Digital Development") {
    //   sethideDigital(true);
    //   sethideGraphicCompo(false);

    // } else if (data === "Other") {
    //   sethideGraphicCompo(false);
    //   return
    // }
  };



  return (
    <>
      {hideGraphicCompo ? (
        <div>
          <h1
            className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3"
            style={{ background: "#7175e1" }}
          >
            Please select the most suitable option.
          </h1>

          <div className="quoteForm d-flex justify-content-center justify-content-center ">
            <div className="w-100">
              <div className="row row-cols-2 g-3 justify-content-center">
                {Fooddata.map((item) => (
                  <div className="col" key={item.id}>
                    <motion.button
                    
                     
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 1.07, backgroundColor: "#000000", boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)"}}
                      className={`${styles.qbutton}`   }
                      onClick={() => handleClick(item.name)}
                    >
                      {item.name}
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Step2 formData={formData} setFormData={setFormData} />
      )}

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
