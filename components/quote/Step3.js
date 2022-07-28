import React from "react";
import styles from "../../styles/css/quote.module.css";

const Step3 = ({formData,setFormData}) => {
  return (
    <div className="container">

    <div className="d-flex ">
    <div className="w-100 ">
        <h1 className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3" style={{background: "#7175e1"}}> Please select the most suitable option.</h1>
      <form>
        <div className="mb-3 text-start mx-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className={`${styles.inputDesign} form-control`}
            id="name"
            value={formData.name}
            onChange={(event)=>setFormData({...formData,name:event.target.value})}/>
        
        </div>
      

      </form>
    </div>
    </div></div>
  );
};

export default Step3;
