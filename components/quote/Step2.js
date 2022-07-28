import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import styles from "../../styles/css/quote.module.css";
const Step2 = ({ formData, setFormData }) => {

  return (
    <>
        <h1 className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3" style={{background: "#7175e1"}}> Please enter your country and country code</h1>
      <div className="">
        <div className="mx-5">

          <div className="row">
            <div className="col-6">
              <CountryDropdown
                
                className={ ` ${styles.inputDesign}    form-select `}
                value={formData.conuntry_name}
                onChange={(countryEvent) =>
                  setFormData({
                    ...formData,
                    conuntry_name: countryEvent,
                  })
                }
              />
            </div>

            <div className="col-lg-6 col-sm-12">
              <RegionDropdown
                className={ ` ${styles.inputDesign}    form-select `}
                country={formData.conuntry_name}
                value={formData.conuntry_region}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    conuntry_region: event,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
