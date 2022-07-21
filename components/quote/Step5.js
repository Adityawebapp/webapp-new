import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Step5 = ({ formData, setFormData }) => {
  const [phone, setPhone] = useState("");
  return (
    <div>
    
      <div className="d-flex align-content-center justify-content-center">
        <div className="w-100">
        <h1 className="text-center fs-6 p-1 text-white bg-blue rounded fw-light mb-3" style={{background: "#7175e1"}}> Please Enter phone number </h1>

          <form>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold ">
                Name
              </label>
              <PhoneInput
                inputStyle={{width:"100%"}}
                country={"eg"}
                enableSearch={true}
                value={formData.mobile}
                onChange={(event) =>
                  setFormData({ ...formData, mobile: event})
                }
              />
            </div>
          </form>
        </div>
      </div>
      {phone}
    </div>
  );
};

export default Step5;
