import React, { useState } from "react";
import Head from "next/head";

import styles from '../styles/css/quote.module.css'

import Step1 from "../components/quote/Step1";
import Step2 from "../components/quote/Step2";
import Step3 from "../components/quote/Step3";
import Step4 from "../components/quote/Step4";
import Step5 from "../components/quote/Step5";



var $

const Quote = () => {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    project: "",
    conuntry_name: "",
    conuntry_region: "",
    name: "",
    email: "",
    mobile: "",
  });

  console.log("formData", formData);


  const FormTitle = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  

  const pageDisplay = () => {
    if (page == 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <Step3 formData={formData} setFormData={setFormData} />;
    } else if (page == 3) {
      return <Step4 formData={formData} setFormData={setFormData} />;
    } else if (page == 4) {
      return <Step5 formData={formData} setFormData={setFormData} />;
    }
  };

  



  return (
    <>

<Head>
        <title>Get Quote For all IT Services -Webapp UK</title>
      

        <link
          rel="canonical"
          href="https://www.webapp.world/services/web-app-trends/laravel-app-development/"
        />
      </Head>


      <div className={ `${styles.bg}`}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-6">
            <div className="form bg-light p-4">
              <div className="processbar  px-5">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    height: "10px",
                    width:
                      page === 0
                        ? "33.33%"
                        : page == 1
                        ? "44%"
                        : page == 2
                        ? "55%"
                        : page == 3
                        ? "65%"
                        : "100%",
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >

             



                </div>
                <p>   
               {
                page === 0
                        ? "33.33%"
                        : page == 1
                        ? "44%"
                        : page == 2
                        ? "55%"
                        : page == 3
                        ? "65%"
                        : "100%"
               }
               </p>
              </div>
              <div className="form-container">
                <div className="header">
                  <h1>{FormTitle[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer my-3 text-center">
                  <button
                    className="btn btn-info"
                    disabled={page == 0}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      if (page == FormTitle.length - 1) {
                        console.log(formData)
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                  >
                    {page === FormTitle.length - 1 ? "submit" : "next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Quote;
