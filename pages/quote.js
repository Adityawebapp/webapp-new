import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";
import {
  BsArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import styles from "../styles/css/quote.module.css";

import Step1 from "../components/quote/Step1";
import Step2 from "../components/quote/Step2";
import Step3 from "../components/quote/Step3";
import Step4 from "../components/quote/Step4";
import Step5 from "../components/quote/Step5";

var $;

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

  console.log(formData, "form data");

  useEffect(() => {}, []);

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

  const particlesLoaded = (container) => {
    console.log(container);
  };

  let particlesInit = async (engine) => {
    await loadFull(engine);
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`${styles.bg}`}>
        <div className="container py-5">
          <div style={{ position: "initial" }}>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "",
                  },
                  position: {
                    value: "initial",
                  },
                },

                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },

                  move: {
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                },
              }}
            />
          </div>

          <div className="row justify-content-center text-center ">
            <div className="col-6">
              <div className={`${styles.formbg} form  p-4`}>
                <div className="processbar  d-flex justify-content-center align-items-center  px-5">
                  <BsArrowLeftCircleFill size={30} />
                  <div className={styles.processbarline}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width:
                          page === 0
                            ? "0%"
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
                    ></div>
                  </div>
                  <BsFillArrowRightCircleFill size={30} />
                </div>

                <p>
                  {page === 0
                    ? "0%"
                    : page == 1
                    ? "44%"
                    : page == 2
                    ? "55%"
                    : page == 3
                    ? "65%"
                    : "100%"}
                </p>
                <div className="form-container">
                  <div className="header">
                    <h1>{FormTitle[page]}</h1>
                  </div>
                  <div className="body">{pageDisplay()}</div>
                  <div className="footer my-5 text-center">
                    <button
                      className={`${styles.button} btn`}
                      disabled={page == 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}
                    >
                      Prev
                    </button>
                    <button
                      className={`${styles.button} btn btn-info`}
                      onClick={() => {
                        if (page == FormTitle.length - 1) {
                          console.log(formData)
                          // =============== end api code  =============
                          axios
                            .post(`https://hurl.webapp.world/api/common/email-form`,formData)
                            .then((res) => {
                              console.log(res);

                              toast.success("mail submit successfully", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                              toast.error("mail sending fail", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            });
                          // ========  end api code   ====================
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                    >
                      {page === FormTitle.length - 1 ? "submit" : "Next"}
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
