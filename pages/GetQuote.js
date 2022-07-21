import React from "react";
import Script from "next/script";
import Head from "next/head";



const GetQuote = () => {
  return (
    <>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
    <Script src="/quote.js" />

      <style jsx>{`
         {
          /* css design  */
        }
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap");

        .particals_section {
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          z-index: 9;
          overflow: hidden;
          height: 100%;
        }

        /* ================================================= */

        /* ================================================================== */
        .main_getcode {
          margin: 1rem 0;
        }

        .getcode h3 {
          font-family: sans-serif;
          font-weight: 900;
        }

        .formfiledheader {
          display: block;
          width: 100%;
          position: relative;
          -moz-border-radius: 9px;
          -webkit-border-radius: 9px;
          border-radius: 9px;
          border: 0px;
          padding: 30px 20px;
          box-shadow: inset 0 -1px 1px rgb(255 255 255 / 30%);
          margin: 0px auto 20px;
        }

        .partical_section_main_div {
          margin: 5rem 0;
        }

        .fieldInfoTxt {
          display: block;
          position: relative;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          text-align: center;
          color: #fff;
          background: #7175e1;
          border: 0px;
          padding: 10px;
          margin: 20px auto 0px;
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
          border-radius: 5px;
        }

        .infoIco {
          position: absolute;
          top: -15px;
          right: -15px;
        }

        .flex_button .btn {
          background-color: #424595;
          border-radius: 10px;
          color: #fff;
        }

        .main-form {
          background: rgb(252 252 252 / 0);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          margin: 2rem 0;
        }

        /* =================================================================================================== */

        #grad1 {
          background-color: #9c27b0;
          background-image: linear-gradient(120deg, #ff4081, #81d4fa);
        }

        #msform {
          text-align: center;
          position: relative;
          margin-top: 20px;
        }

        #msform fieldset .form-card {
          background: white;
          border: 0 none;
          border-radius: 0px;
          box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
          padding: 20px 40px 30px 40px;
          box-sizing: border-box;
          width: 94%;
          margin: 0 3% 20px 3%;
          position: relative;
          height: 100%;
        }

        #msform fieldset {
          background: white;
          border: 0 none;
          border-radius: 0.5rem;
          box-sizing: border-box;
          width: 100%;
          margin: 0;
          padding-bottom: 20px;
          position: relative;
        }

        #msform fieldset:not(:first-of-type) {
          display: none;
        }

        #msform fieldset .form-card {
          text-align: left;
          color: #9e9e9e;
        }

        #msform input,
        #msform textarea {
          padding: 0px 8px 4px 8px;
          border: none;
          border-bottom: 1px solid #ccc;
          border-radius: 0px;
          margin-bottom: 25px;
          margin-top: 2px;
          width: 100%;
          box-sizing: border-box;
          font-family: montserrat;
          color: #2c3e50;
          font-size: 16px;
          letter-spacing: 1px;
        }

        #msform input:focus,
        #msform textarea:focus {
          -moz-box-shadow: none !important;
          -webkit-box-shadow: none !important;
          box-shadow: none !important;
          border: none;
          font-weight: bold;
          border-bottom: 2px solid skyblue;
          outline-width: 0;
        }

        #msform .action-button {
          width: 100px;
          background: skyblue;
          font-weight: bold;
          color: white;
          border: 0 none;
          border-radius: 0px;
          cursor: pointer;
          padding: 10px 5px;
          margin: 10px 5px;
        }

        #msform .action-button:hover,
        #msform .action-button:focus {
          box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue;
        }

        #msform .action-button-previous {
          width: 100px;
          font-weight: bold;
          color: white;
          border: 0 none;
          border-radius: 0px;
          cursor: pointer;
          padding: 10px 5px;
          margin: 10px 5px;
        }

        #msform .action-button-previous:hover,
        #msform .action-button-previous:focus {
          box-shadow: 0 0 0 2px white, 0 0 0 3px #616161;
        }

        select.list-dt {
          border: none;
          outline: 0;
          border-bottom: 1px solid #ccc;
          padding: 2px 5px 3px 5px;
          margin: 2px;
        }

        select.list-dt:focus {
          border-bottom: 2px solid skyblue;
        }

        .card {
          z-index: 0;
          border: none;
          border-radius: 0.5rem;
          position: relative;
        }

        .fs-title {
          font-size: 25px;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: bold;
          text-align: left;
        }

        #progressbar {
          margin-bottom: 30px;
          overflow: hidden;
          color: lightgrey;
        }

        #progressbar .active {
          color: #000000;
        }

        #progressbar li {
          list-style-type: none;
          font-size: 12px;
          width: 25%;
          float: left;
          position: relative;
        }

        #progressbar #account:before {
          font-family: FontAwesome;
          content: "\f023";
        }

        #progressbar #personal:before {
          font-family: FontAwesome;
          content: "\f007";
        }

        #progressbar #payment:before {
          font-family: FontAwesome;
          content: "\f09d";
        }

        #progressbar #confirm:before {
          font-family: FontAwesome;
          content: "\f00c";
        }

        #progressbar li:before {
          width: 50px;
          height: 50px;
          line-height: 45px;
          display: block;
          font-size: 18px;
          color: #ffffff;
          background: lightgray;
          border-radius: 50%;
          margin: 0 auto 10px auto;
          padding: 2px;
        }

        #progressbar li:after {
          content: "";
          width: 100%;
          height: 2px;
          background: lightgray;
          position: absolute;
          left: 0;
          top: 25px;
          z-index: -1;
        }

        #progressbar li.active:before,
        #progressbar li.active:after {
          background: skyblue;
        }

        .radio-group {
          position: relative;
          margin-bottom: 25px;
        }

        .radio {
          display: inline-block;
          width: 204;
          height: 104;
          border-radius: 0;
          background: lightblue;
          box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          cursor: pointer;
          margin: 8px 2px;
        }

        .radio:hover {
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
        }

        .radio.selected {
          box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
        }

        .fit-image {
          width: 100%;
          object-fit: cover;
        }

        /* ======================== */
        #wizard {
          top: 20px;
          position: relative;
          border: 1px solid #ccc;
          padding: 20px;
        }

        #wzd-content {
          font-size: 20px;
        }

        .btn-wzd {
          font-size: 2em;
          color: #000;
        }

        /* ======================== */
        .form-control {
          padding: 0.375rem 0.75rem;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 2px solid #ced4da;
          border-radius: 0;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .form-control:focus {
          border-color: #ffffff !important;
          outline: 0;
          box-shadow: 0 0 0 0.1rem rgb(0 0 0);
        }

        #navbar {
          display: none !important;
        }

        .progress {
          height: 1.5rem;
          font-size: 0.75rem;
          border-radius: 0.7rem;
        }

        /* =============================================================================================================== */

        .flex_button .btn {
          background-color: #424595;
          border-radius: 10px;
          color: #fff;
          width: 100%;
          height: 75px;
        }

        .btn-danger {
          border-color: transparent;
        }

        .progress {
          border: 1px solid white;
          padding: 2px;
          background: transparent;
        }

        .progress-bar {
          border-radius: 15px;
          width: 25%;
        }

        .fa-arrow-circle-left,
        .fa-arrow-circle-right {
          cursor: pointer;
          font-size: 2.5rem;
        }

        .fieldInfoTxt > p {
          font-size: 1.1rem;
        }

        /*========= getcode preloder spinner  ==================*/

        .main-spinner {
          height: 100vh;
          display: flex;
          background-position: center;
          object-fit: fill;
          background-color: transparent;
          transition: all linear 0.5s;
        }

        .spinner {
          margin: auto;
          height: 270px;
          width: 270px;
          border-radius: 50%;
          background-color: transparent;
          border: 3px solid #f2f2f2;
          border-bottom: none;
          border-left: none;
          animation: spin 4.5s infinite linear reverse;
        }
        .spinner .spinner2 {
          border-color: blueviolet;
          margin: 8px auto;
          height: 250px;
          width: 250px;
          animation: spin 2s infinite linear;
        }
        .spinner .spinner3 {
          border-color: yellow;
          margin: 7px auto;
          height: 230px;
          width: 230px;
          animation: spin 1s infinite linear reverse;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        /* =============================== */
        .main-spinner {
          position: fixed;
          z-index: 101;
          top: 0;
          font-weight: bold;
          font-size: 10px;
          height: 100vh;
          width: 100%;
          background-color: #000;
          /* background-image: url("https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); */
        }

        /* ======================================================================================= */
        input[type="text"] {
          box-shadow: rgb(255 0 0) 0px 0px 1.5px 1px !important;
          border: 2px solid #9374db;
          height: 55px;
          border-radius: 9px;
        }

        .form-control:focus {
          border: 2px solid #424595 !important;
          box-shadow: 0 0 10px #424595;
        }

        .box_heading h3 {
          font-family: "Poppins", sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .formfiledheader h3 {
          color: #424595;
          font-family: "Poppins", sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: inherit;
          line-height: 1.3;
        }

        .animation_btn {
          background-color: #f74169;
          color: white;
          border-radius: 10px;
          padding: 13px 56px 13px 56px;
          font-size: 22px;
          font-weight: 500;
          animation: zoom-in-zoom-out 2s ease-out infinite;
        }

        .animation_btn:hover {
          background-color: #424595;
          color: white;
        }

        .getcode p {
          font-size: 14px;
        }
        .fa-info-circle {
          font-size: 1.5rem;
          border: 3px solid white;
          border-radius: 50%;
          background: white;
        }

        .center_input {
          display: flex;
          justify-content: center;
        }

        @keyframes zoom-in-zoom-out {
          0% {
            transform: scale(0.9);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0.9);
          }
        }

        #country-code {
          width: 9rem;
          border-radius: 9px 9px 9px 9px;
          /* border-right: none!important; */
          margin-right: 10px;
        }

        input[type="tel"] {
          /* border-left: none!important; */
          box-shadow: none !important;
          border: 2px solid #9374db;
          width: 360px;
          height: 55px;
          box-shadow: rgb(255 0 0) 0px 0px 1.5px 1px !important;
          border-radius: 9px;
        }

        select {
          border: 2px solid #9374db !important;
          box-shadow: 0 0 10px #424595;
          font-size: 1rem;
          box-shadow: rgb(255 0 0) 0px 0px 1.5px 1px !important;
        }

        /* ================================================ */

        #company_name {
          border-radius: 9px 9px 9px 9px;
          /* border-right: none!important; */
          margin-right: 10px;
        }

        @media (max-width: 576px) {
          .logo_img {
            top: 36.5% !important;
            left: 28.5% !important;
          }

          .sss .logo_img img {
            width: 60% !important;
          }
          .mobile_number_select #contact_number {
            width: 60% !important;
          }

          .mobile_number_select #country-code {
            width: 30% !important;
          }
        }

        @media (max-width: 360px) {
          .logo_img {
            top: 40.5% !important;
            left: 28.5% !important;
          }

          .sss .logo_img img {
            width: 60% !important;
          }
        }

        /* ======================= */

        /* animation background  */

        html,
        body {
          position: relative;
          height: 100%;
        }

        .bg {
          animation: slide 3s ease-in-out infinite alternate;
          background-image: linear-gradient(-60deg, #ffefba 50%, #ffffff 50%);
          bottom: 0;
          left: -50%;
          opacity: 0.5;
          position: fixed;
          right: -50%;
          top: 0;
          z-index: -1;
        }

        .bg2 {
          animation-direction: alternate-reverse;
          animation-duration: 4s;
        }

        .bg3 {
          animation-duration: 5s;
        }

        @keyframes slide {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(25%);
          }
        }

         {
          /* css design  */
        }
      `}</style>

      <section className="particals_section particle_main">
        <div className="container partical_section_main_div">
          {/* <!-- animation background  --> */}
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          {/* <!-- animation background  --> */}

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              {/* <!-- overlay html code  --> */}
              <form className="main-form shadow">
                <div className="particle_text text-center">
                  <div className="main_getcode">
                    {/* <!-- ---------------------------------Step 1 ------------------  --> */}

                    <div id="step1">
                      <div className="formfiledheader box_heading">
                        <h3>
                          What kind of projects do you want us to work on with
                          you?
                        </h3>
                        <div className="fieldInfoTxt">
                          <div className="infoIco">
                            <i className="text-danger fas fa-info-circle"></i>
                          </div>
                          <p>Please select the most suitable option.</p>
                        </div>

                        <div className="flex_button mt-3 d-flex justify-content-center d-flex">
                          <div className="row">
                            <input
                              type="hidden"
                              name="business"
                              ngModel
                              formControlName="business"
                              value=""
                              id="stepinput1"
                            />
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="Graphic Design"
                                className="btn p-4 me-4"
                                data-bs-toggle="modal"
                              >
                                Graphic Design
                              </button>
                            </div>
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="App Development"
                                className="btn p-4"
                              >
                                App Development
                              </button>
                            </div>
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="Game Development"
                                className="btn p-4"
                              >
                                Game Development
                              </button>
                            </div>
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="Web Development"
                                className="btn"
                              >
                                Web Development
                              </button>
                            </div>
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="Digital Development"
                                className="btn"
                              >
                                Digital Development
                              </button>
                            </div>
                            <div className="col-lg-4 col-sm-12 mt-1">
                              <button
                                id="stepmodule1"
                                data-id="others step1"
                                className="btn"
                              >
                                Other
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!------------------------------ stap 2 --------------------- --> */}

                    <div
                      className="text-center"
                      id="step2"
                      style={{ display: "none" }}
                    >
                      <div className="main_getcode">
                        <input
                          type="hidden"
                          name="industries"
                          ngModel
                          formControlName="industries"
                          value=""
                          id="stepinput2"
                        />

                        <div className="getcode mb-5 text-dark">
                          <span>
                            <p>15% Complete</p>
                          </span>
                          <div className="row justify-content-center align-items-center">
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-left"
                                  data-id="backstep1"
                                  id="stepmodule1"
                                ></i>
                              </div>
                            </div>

                            <div className="col-4">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow="15"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-right"
                                  data-id="formfield1"
                                  id="stepmodule2"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- --------------------------Start Graphic Design Item------ --> */}

                        <div
                          className="formfiledheader"
                          id="graphicItem"
                          style={{ display: "none" }}
                        >
                          <h3>Graphic design</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please select the most suitable option.</p>
                          </div>
                          <div className="flex_button mt-4">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12 mt-2">
                                <button
                                  id="stepmodule2"
                                  data-id="InDesign"
                                  className="btn btn-danger"
                                >
                                  InDesign
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12 mt-2">
                                <button
                                  id="stepmodule2"
                                  data-id="Illustrator"
                                  className="btn btn-danger"
                                >
                                  Illustrator
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12 mt-2">
                                <button
                                  id="stepmodule2"
                                  data-id="Photoshop"
                                  className="btn btn-danger"
                                >
                                  Photoshop
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12 gy-2">
                                <button
                                  id="stepmodule2"
                                  data-id="Premiere & After Effects"
                                  className="btn btn-danger"
                                >
                                  Premiere &<br />
                                  After Effects
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12 gy-2">
                                <button
                                  id="stepmodule2"
                                  data-id="Other"
                                  className="btn btn-danger"
                                >
                                  Other
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- --------------------------End Graphic Design Item------ -->

                  <!-- --------------------------Start App Development Item------ --> */}
                        <div
                          className="formfiledheader"
                          id="appItem"
                          style={{ display: "none" }}
                        >
                          <h3>App Industries</h3>
                          <div className="fieldInfoTxt">
                            <div
                              className="infoIco"
                              style={{ height: "300px", overflowX: "hidden" }}
                            >
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please select App Industries</p>
                          </div>
                          <div className="flex_button mt-4">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Food"
                                  data-back=""
                                  className="btn p-2 m-2"
                                >
                                  Food
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Ecommerce"
                                  className="btn p-2 m-2"
                                >
                                  Ecommerce
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="texi"
                                  className="btn p-2 m-2"
                                >
                                  Taxi
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Pick up & Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Pick up &<br />
                                  Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Grocery Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Grocery Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Laundry"
                                  className="btn p-2 m-2"
                                >
                                  Laundry
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Beauty"
                                  className="btn p-2 m-2"
                                >
                                  Beauty
                                </button>
                                <br />
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Pharmacy Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Pharmacy
                                  <br />
                                  Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Healthcare"
                                  className="btn p-2 m-2"
                                >
                                  Healthcare
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Education"
                                  className="btn p-2 m-2"
                                >
                                  Education
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Social Media"
                                  className="btn p-2 m-2"
                                >
                                  Social Media
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Other"
                                  className="btn p-2 m-2"
                                >
                                  Other
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!----------------------------- End App Development ----------------------->

                  <!-- --------------------------Start Web Development Item------ --> */}
                        <div
                          className="formfiledheader"
                          id="webItem"
                          style={{ display: "none" }}
                        >
                          <h3>Web Industries</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please select Web Industries</p>
                          </div>
                          <div className="flex_button mt-4">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Food"
                                  data-back=""
                                  className="btn p-2 m-2"
                                >
                                  Food
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Ecommerce"
                                  className="btn p-2 m-2"
                                >
                                  Ecommerce
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="texi"
                                  className="btn p-2 m-2"
                                >
                                  Taxi
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Pick up & Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Pick up &<br />
                                  Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Grocery Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Grocery Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Laundry"
                                  className="btn p-2 m-2"
                                >
                                  Laundry
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Beauty"
                                  className="btn p-2 m-2"
                                >
                                  Beauty
                                </button>
                                <br />
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Pharmacy Delivery"
                                  className="btn p-2 m-2"
                                >
                                  Pharmacy
                                  <br />
                                  Delivery
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Healthcare"
                                  className="btn p-2 m-2"
                                >
                                  Healthcare
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Education"
                                  className="btn p-2 m-2"
                                >
                                  Education
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Social Media"
                                  className="btn p-2 m-2"
                                >
                                  Social Media
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Other"
                                  className="btn p-2 m-2"
                                >
                                  Other
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!----------------------------- End Web Development ----------------------->

                  <!-- -----------------------------------Start Game Development-------------> */}
                        <div
                          className="formfiledheader"
                          id="gameItem"
                          style={{ display: "none" }}
                        >
                          <h3>Game Development</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please select Game Development</p>
                          </div>
                          <div className="flex_button mt-4">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="2D Games"
                                  data-back=""
                                  className="btn p-2 m-2"
                                >
                                  2D Games
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="3D Games"
                                  className="btn p-2 m-2"
                                >
                                  3D Games
                                </button>
                              </div>

                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id=" Machine Mechanism"
                                  className="btn p-2 m-2"
                                >
                                  Machine Mechanism
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="AI Mechanism"
                                  className="btn p-2 m-2"
                                >
                                  AI Mechanism
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="AR & VR"
                                  className="btn p-2 m-2"
                                >
                                  AR & VR
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Other"
                                  className="btn p-2 m-2"
                                >
                                  Other
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!------------------------------End Game Development --------------------- -->

                  <!----------------------------- Start Digital Development --------------------- --> */}

                        <div
                          className="formfiledheader"
                          id="digitalItem"
                          style={{ display: "none" }}
                        >
                          <h3>Digital Development</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please select Digital Development</p>
                          </div>
                          <div className="flex_button mt-4">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Food"
                                  data-back=""
                                  className="btn p-2 m-2"
                                >
                                  SEO
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Ecommerce"
                                  className="btn p-2 m-2"
                                >
                                  PPC
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Pick up & Delivery"
                                  className="btn p-2 m-2"
                                >
                                  CRO
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Grocery Delivery"
                                  className="btn p-2 m-2"
                                >
                                  AI Social Media
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="Laundry"
                                  className="btn p-2 m-2"
                                >
                                  Content Writing
                                </button>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <button
                                  id="stepmodule2"
                                  data-id="texi"
                                  className="btn p-2 m-2"
                                >
                                  Other
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!------------------------------End Digital development --------------------- -->

                  <!-- -------------------------------- Start Others Field ------------------------------------- --> */}

                        <div
                          className="formfiledheader"
                          id="otherItem"
                          style={{ display: "none" }}
                        >
                          <h3>What is your business name?</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>

                            <p>Please enter business name</p>
                          </div>
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-12 center_input">
                                <div className="mb-3">
                                  {/* <!-- <label for="company" className="form-label"> Description</label> --> */}
                                  <input
                                    type="text"
                                    name="business_name"
                                    ngModel
                                    id="business_name"
                                    formControlName="business_name"
                                    value=""
                                    className="form-control"
                                    placeholder="please enter business name "
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  className="btn animation_btn"
                                  data-id="ohter"
                                  id="otherfirstbtn"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- -------------------------------- End Others Field ------------------------------------- --> */}
                      </div>
                    </div>
                    {/* <!-- ---------------------End Step 2-------------------------------- --> */}

                    {/* <!------------------------------ filling step 1 --------------------- --> */}
                    <div
                      className="text-center"
                      id="FormField1"
                      style={{ display: "none" }}
                    >
                      <div className="main_getcode">
                        <div className="getcode mb-5 text-dark">
                          <span>
                            <p>20% Complete</p>
                          </span>
                          <div className="row justify-content-center align-items-center">
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-left"
                                  id="stepmodule1"
                                  data-id="form1"
                                ></i>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-right"
                                  data-id="formFill1"
                                  id="FormBtn"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="formfiledheader">
                          <h3>What is your country name?</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>

                            <p>Please enter your country</p>
                          </div>
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-12 center_input">
                                <div className="mb-3">
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    // style={{padding: 1rem 9rem 1rem 0.5rem}}
                                  >
                                    <option selected className="bg-info">
                                      Please select country
                                    </option>
                                    <option value="Afganistan">
                                      Afghanistan
                                    </option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">
                                      American Samoa
                                    </option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua & Barbuda">
                                      Antigua & Barbuda
                                    </option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">
                                      Azerbaijan
                                    </option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">
                                      Bangladesh
                                    </option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia & Herzegovina">
                                      Bosnia & Herzegovina
                                    </option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">
                                      British Indian Ocean Ter
                                    </option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">
                                      Burkina Faso
                                    </option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">
                                      Canary Islands
                                    </option>
                                    <option value="Cape Verde">
                                      Cape Verde
                                    </option>
                                    <option value="Cayman Islands">
                                      Cayman Islands
                                    </option>
                                    <option value="Central African Republic">
                                      Central African Republic
                                    </option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">
                                      Channel Islands
                                    </option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">
                                      Christmas Island
                                    </option>
                                    <option value="Cocos Island">
                                      Cocos Island
                                    </option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">
                                      Cook Islands
                                    </option>
                                    <option value="Costa Rica">
                                      Costa Rica
                                    </option>
                                    <option value="Cote DIvoire">
                                      Cote DIvoire
                                    </option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">
                                      Czech Republic
                                    </option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">
                                      Dominican Republic
                                    </option>
                                    <option value="East Timor">
                                      East Timor
                                    </option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">
                                      El Salvador
                                    </option>
                                    <option value="Equatorial Guinea">
                                      Equatorial Guinea
                                    </option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">
                                      Falkland Islands
                                    </option>
                                    <option value="Faroe Islands">
                                      Faroe Islands
                                    </option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">
                                      French Guiana
                                    </option>
                                    <option value="French Polynesia">
                                      French Polynesia
                                    </option>
                                    <option value="French Southern Ter">
                                      French Southern Ter
                                    </option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">
                                      Great Britain
                                    </option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">
                                      Guadeloupe
                                    </option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">
                                      Isle of Man
                                    </option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">
                                      Kazakhstan
                                    </option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">
                                      Korea North
                                    </option>
                                    <option value="Korea Sout">
                                      Korea South
                                    </option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">
                                      Kyrgyzstan
                                    </option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">
                                      Liechtenstein
                                    </option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">
                                      Luxembourg
                                    </option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">
                                      Madagascar
                                    </option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">
                                      Marshall Islands
                                    </option>
                                    <option value="Martinique">
                                      Martinique
                                    </option>
                                    <option value="Mauritania">
                                      Mauritania
                                    </option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">
                                      Midway Islands
                                    </option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">
                                      Montserrat
                                    </option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">
                                      Mozambique
                                    </option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">
                                      Netherland Antilles
                                    </option>
                                    <option value="Netherlands">
                                      Netherlands (Holland, Europe)
                                    </option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">
                                      New Caledonia
                                    </option>
                                    <option value="New Zealand">
                                      New Zealand
                                    </option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">
                                      Norfolk Island
                                    </option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">
                                      Palau Island
                                    </option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">
                                      Papua New Guinea
                                    </option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">
                                      Philippines
                                    </option>
                                    <option value="Pitcairn Island">
                                      Pitcairn Island
                                    </option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">
                                      Puerto Rico
                                    </option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">
                                      Republic of Montenegro
                                    </option>
                                    <option value="Republic of Serbia">
                                      Republic of Serbia
                                    </option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">
                                      St Barthelemy
                                    </option>
                                    <option value="St Eustatius">
                                      St Eustatius
                                    </option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">
                                      St Kitts-Nevis
                                    </option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">
                                      St Maarten
                                    </option>
                                    <option value="St Pierre & Miquelon">
                                      St Pierre & Miquelon
                                    </option>
                                    <option value="St Vincent & Grenadines">
                                      St Vincent & Grenadines
                                    </option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">
                                      Samoa American
                                    </option>
                                    <option value="San Marino">
                                      San Marino
                                    </option>
                                    <option value="Sao Tome & Principe">
                                      Sao Tome & Principe
                                    </option>
                                    <option value="Saudi Arabia">
                                      Saudi Arabia
                                    </option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">
                                      Seychelles
                                    </option>
                                    <option value="Sierra Leone">
                                      Sierra Leone
                                    </option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">
                                      Solomon Islands
                                    </option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">
                                      South Africa
                                    </option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">
                                      Switzerland
                                    </option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">
                                      Tajikistan
                                    </option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad & Tobago">
                                      Trinidad & Tobago
                                    </option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">
                                      Turkmenistan
                                    </option>
                                    <option value="Turks & Caicos Is">
                                      Turks & Caicos Is
                                    </option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">
                                      United Kingdom
                                    </option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">
                                      United Arab Emirates
                                    </option>
                                    <option value="United States of America">
                                      United States of America
                                    </option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">
                                      Uzbekistan
                                    </option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">
                                      Vatican City State
                                    </option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">
                                      Virgin Islands (Brit)
                                    </option>
                                    <option value="Virgin Islands (USA)">
                                      Virgin Islands (USA)
                                    </option>
                                    <option value="Wake Island">
                                      Wake Island
                                    </option>
                                    <option value="Wallis & Futana Is">
                                      Wallis & Futana Is
                                    </option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                  </select>
                                </div>
                                {/* <!-- ==================================================================================================================================== --> */}
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                className="btn animation_btn"
                                data-id="form1"
                                id="FormBtn"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!----------------------------- end stap 1 --------------------- -->

              <!-- =============================================================== -->

              <!------------------------------ filling step 2 --------------------- --> */}
                  <div
                    className="text-center"
                    id="FormField2"
                    style={{ display: "none" }}
                  >
                    <div className="main_getcode">
                      <div className="getcode mb-5 text-dark">
                        <span>
                          <p>40% Complete</p>
                        </span>
                        <div className="row justify-content-center align-items-center">
                          <div className="col-2">
                            <div className="leftIcon">
                              <i
                                className="fas fa-arrow-circle-left"
                                data-id="backbtn2"
                                id="stepmodule2"
                              ></i>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="leftIcon">
                              <i
                                className="fas fa-arrow-circle-right"
                                data-id="formback3"
                                id="FormBtn"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="formfiledheader">
                        <h3>What is your street address?</h3>
                        <div className="fieldInfoTxt">
                          <div className="infoIco">
                            <i className="text-danger fas fa-info-circle"></i>
                          </div>

                          <p>Please enter your street address</p>
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col-md-12 center_input">
                              <div className="mb-3">
                                {/* <!-- <label for="company" className="form-label"> street address </label> --> */}
                                <input
                                  type="text"
                                  className="form-control"
                                  ngModel
                                  placeholder="enter your address"
                                  id="business_address"
                                  name="business_address"
                                  value=""
                                  formControlName="business_address"
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                className="btn animation_btn"
                                data-id="form2"
                                id="FormBtn"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- end form code  --> */}
                    </div>
                  </div>
                  {/* <!----------------------------- end stap 2 --------------------- -->

              <!------------------------------ filling step 3   --------------------- --> */}
                  <div
                    className="text-center"
                    id="FormField3"
                    style={{ display: "none" }}
                  >
                    <div className="main_getcode">
                      <div className="getcode mb-5 text-dark">
                        <span>
                          <p>60% Complete</p>
                        </span>
                        <div className="row justify-content-center align-items-center">
                          <div className="col-2">
                            <div className="leftIcon">
                              <i
                                className="fas fa-arrow-circle-left"
                                data-id="formback2"
                                id="FormBtn"
                              ></i>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="leftIcon">
                              <i
                                className="fas fa-arrow-circle-right"
                                data-id="formback4"
                                id="FormBtn"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="formfiledheader">
                        <h3>What is your name?</h3>
                        <div className="fieldInfoTxt">
                          <div className="infoIco">
                            <i className="text-danger fas fa-info-circle"></i>
                          </div>

                          <p>Please enter your name</p>
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col-md-12 center_input">
                              <div className="mb-3">
                                {/* <!-- <label for="company" className="form-label">please enter your name </label> --> */}
                                <input
                                  type="text"
                                  className="form-control"
                                  ngModel
                                  placeholder="enter name "
                                  id="name"
                                  name="name"
                                  value=""
                                  formControlName="name"
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                className="btn animation_btn"
                                data-id="form3"
                                id="FormBtn"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- end form code  --> */}
                    </div>
                    {/* </div>
              <!----------------------------- end stap 3 --------------------- -->
              <!------------------------------ filling step 4   --------------------- --> */}
                    <div
                      className="text-center"
                      id="FormField4"
                      style={{ display: "none" }}
                    >
                      <div className="main_getcode">
                        <div className="getcode mb-5 text-dark">
                          <span>
                            <p>75% Complete</p>
                          </span>
                          <div className="row justify-content-center align-items-center">
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-left"
                                  data-id="formback3"
                                  id="FormBtn"
                                ></i>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-right"
                                  data-id="formback5"
                                  id="FormBtn"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- form code  --> */}
                        <div className="formfiledheader">
                          <h3>What is your email address?</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>

                            <p>Plase enter your email address</p>
                          </div>
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-12 center_input">
                                <div className="mb-3">
                                  {/* <!-- <label for="company" className="form-label">enter email </label> --> */}
                                  <input
                                    type="text"
                                    className="form-control"
                                    ngModel
                                    placeholder="enter your business name "
                                    id="email"
                                    name="email"
                                    value=""
                                    formControlName="email"
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  className="btn animation_btn"
                                  data-id="form4"
                                  id="FormBtn"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- end form code  --> */}
                      </div>
                    </div>
                    {/* <!----------------------------- end stap 4 --------------------- -->
              <!------------------------------ filling step 5   --------------------- --> */}
                    <div
                      className="text-center"
                      id="FormField5"
                      style={{ display: "none" }}
                    >
                      <div className="main_getcode">
                        <div className="getcode mb-5 text-dark">
                          <span>
                            <p>100% Complete</p>
                          </span>
                          <div className="row justify-content-center align-items-center">
                            <div className="col-2">
                              <div className="leftIcon">
                                <i
                                  className="fas fa-arrow-circle-left"
                                  data-id="formback4"
                                  id="FormBtn"
                                ></i>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- form code  --> */}
                        <div className="formfiledheader">
                          <h3>What is your mobile number?</h3>
                          <div className="fieldInfoTxt">
                            <div className="infoIco">
                              <i className="text-danger fas fa-info-circle"></i>
                            </div>
                            <p>Please enter your mobile number</p>
                          </div>
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-12 center_inputn mobile_number_select">
                                <div className="mb-3">
                                  <div className="input-group mb-3">
                                    <select
                                      name="countryCode"
                                      id="country-code"
                                    >
                                      <option data-countryCode="US" value="1">
                                        UK (+44)
                                      </option>

                                      <optgroup label="Other countries">
                                        <option
                                          data-countryCode="DZ"
                                          value="213"
                                        >
                                          Algeria (+213)
                                        </option>
                                        <option
                                          data-countryCode="AD"
                                          value="376"
                                        >
                                          Andorra (+376)
                                        </option>
                                        <option
                                          data-countryCode="AO"
                                          value="244"
                                        >
                                          Angola (+244)
                                        </option>
                                        <option
                                          data-countryCode="AI"
                                          value="1264"
                                        >
                                          Anguilla (+1264)
                                        </option>
                                        <option
                                          data-countryCode="AG"
                                          value="1268"
                                        >
                                          Antigua & Barbuda (+1268)
                                        </option>
                                        <option
                                          data-countryCode="AR"
                                          value="54"
                                        >
                                          Argentina (+54)
                                        </option>
                                        <option
                                          data-countryCode="AM"
                                          value="374"
                                        >
                                          Armenia (+374)
                                        </option>
                                        <option
                                          data-countryCode="AW"
                                          value="297"
                                        >
                                          Aruba (+297)
                                        </option>
                                        <option
                                          data-countryCode="AU"
                                          value="61"
                                        >
                                          Australia (+61)
                                        </option>
                                        <option
                                          data-countryCode="AT"
                                          value="43"
                                        >
                                          Austria (+43)
                                        </option>
                                        <option
                                          data-countryCode="AZ"
                                          value="994"
                                        >
                                          Azerbaijan (+994)
                                        </option>
                                        <option
                                          data-countryCode="BS"
                                          value="1242"
                                        >
                                          Bahamas (+1242)
                                        </option>
                                        <option
                                          data-countryCode="BH"
                                          value="973"
                                        >
                                          Bahrain (+973)
                                        </option>
                                        <option
                                          data-countryCode="BD"
                                          value="880"
                                        >
                                          Bangladesh (+880)
                                        </option>
                                        <option
                                          data-countryCode="BB"
                                          value="1246"
                                        >
                                          Barbados (+1246)
                                        </option>
                                        <option
                                          data-countryCode="BY"
                                          value="375"
                                        >
                                          Belarus (+375)
                                        </option>
                                        <option
                                          data-countryCode="BE"
                                          value="32"
                                        >
                                          Belgium (+32)
                                        </option>
                                        <option
                                          data-countryCode="BZ"
                                          value="501"
                                        >
                                          Belize (+501)
                                        </option>
                                        <option
                                          data-countryCode="BJ"
                                          value="229"
                                        >
                                          Benin (+229)
                                        </option>
                                        <option
                                          data-countryCode="BM"
                                          value="1441"
                                        >
                                          Bermuda (+1441)
                                        </option>
                                        <option
                                          data-countryCode="BT"
                                          value="975"
                                        >
                                          Bhutan (+975)
                                        </option>
                                        <option
                                          data-countryCode="BO"
                                          value="591"
                                        >
                                          Bolivia (+591)
                                        </option>
                                        <option
                                          data-countryCode="BA"
                                          value="387"
                                        >
                                          Bosnia Herzegovina (+387)
                                        </option>
                                        <option
                                          data-countryCode="BW"
                                          value="267"
                                        >
                                          Botswana (+267)
                                        </option>
                                        <option
                                          data-countryCode="BR"
                                          value="55"
                                        >
                                          Brazil (+55)
                                        </option>
                                        <option
                                          data-countryCode="BN"
                                          value="673"
                                        >
                                          Brunei (+673)
                                        </option>
                                        <option
                                          data-countryCode="BG"
                                          value="359"
                                        >
                                          Bulgaria (+359)
                                        </option>
                                        <option
                                          data-countryCode="BF"
                                          value="226"
                                        >
                                          Burkina Faso (+226)
                                        </option>
                                        <option
                                          data-countryCode="BI"
                                          value="257"
                                        >
                                          Burundi (+257)
                                        </option>
                                        <option
                                          data-countryCode="KH"
                                          value="855"
                                        >
                                          Cambodia (+855)
                                        </option>
                                        <option
                                          data-countryCode="CM"
                                          value="237"
                                        >
                                          Cameroon (+237)
                                        </option>
                                        <option data-countryCode="CA" value="1">
                                          Canada (+1)
                                        </option>
                                        <option
                                          data-countryCode="CV"
                                          value="238"
                                        >
                                          Cape Verde Islands (+238)
                                        </option>
                                        <option
                                          data-countryCode="KY"
                                          value="1345"
                                        >
                                          Cayman Islands (+1345)
                                        </option>
                                        <option
                                          data-countryCode="CF"
                                          value="236"
                                        >
                                          Central African Republic (+236)
                                        </option>
                                        <option
                                          data-countryCode="CL"
                                          value="56"
                                        >
                                          Chile (+56)
                                        </option>
                                        <option
                                          data-countryCode="CN"
                                          value="86"
                                        >
                                          China (+86)
                                        </option>
                                        <option
                                          data-countryCode="CO"
                                          value="57"
                                        >
                                          Colombia (+57)
                                        </option>
                                        <option
                                          data-countryCode="KM"
                                          value="269"
                                        >
                                          Comoros (+269)
                                        </option>
                                        <option
                                          data-countryCode="CG"
                                          value="242"
                                        >
                                          Congo (+242)
                                        </option>
                                        <option
                                          data-countryCode="CK"
                                          value="682"
                                        >
                                          Cook Islands (+682)
                                        </option>
                                        <option
                                          data-countryCode="CR"
                                          value="506"
                                        >
                                          Costa Rica (+506)
                                        </option>
                                        <option
                                          data-countryCode="HR"
                                          value="385"
                                        >
                                          Croatia (+385)
                                        </option>
                                        <option
                                          data-countryCode="CU"
                                          value="53"
                                        >
                                          Cuba (+53)
                                        </option>
                                        <option
                                          data-countryCode="CY"
                                          value="90392"
                                        >
                                          Cyprus North (+90392)
                                        </option>
                                        <option
                                          data-countryCode="CY"
                                          value="357"
                                        >
                                          Cyprus South (+357)
                                        </option>
                                        <option
                                          data-countryCode="CZ"
                                          value="42"
                                        >
                                          Czech Republic (+42)
                                        </option>
                                        <option
                                          data-countryCode="DK"
                                          value="45"
                                        >
                                          Denmark (+45)
                                        </option>
                                        <option
                                          data-countryCode="DJ"
                                          value="253"
                                        >
                                          Djibouti (+253)
                                        </option>
                                        <option
                                          data-countryCode="DM"
                                          value="1809"
                                        >
                                          Dominica (+1809)
                                        </option>
                                        <option
                                          data-countryCode="DO"
                                          value="1809"
                                        >
                                          Dominican Republic (+1809)
                                        </option>
                                        <option
                                          data-countryCode="EC"
                                          value="593"
                                        >
                                          Ecuador (+593)
                                        </option>
                                        <option
                                          data-countryCode="EG"
                                          value="20"
                                        >
                                          Egypt (+20)
                                        </option>
                                        <option
                                          data-countryCode="SV"
                                          value="503"
                                        >
                                          El Salvador (+503)
                                        </option>
                                        <option
                                          data-countryCode="GQ"
                                          value="240"
                                        >
                                          Equatorial Guinea (+240)
                                        </option>
                                        <option
                                          data-countryCode="ER"
                                          value="291"
                                        >
                                          Eritrea (+291)
                                        </option>
                                        <option
                                          data-countryCode="EE"
                                          value="372"
                                        >
                                          Estonia (+372)
                                        </option>
                                        <option
                                          data-countryCode="ET"
                                          value="251"
                                        >
                                          Ethiopia (+251)
                                        </option>
                                        <option
                                          data-countryCode="FK"
                                          value="500"
                                        >
                                          Falkland Islands (+500)
                                        </option>
                                        <option
                                          data-countryCode="FO"
                                          value="298"
                                        >
                                          Faroe Islands (+298)
                                        </option>
                                        <option
                                          data-countryCode="FJ"
                                          value="679"
                                        >
                                          Fiji (+679)
                                        </option>
                                        <option
                                          data-countryCode="FI"
                                          value="358"
                                        >
                                          Finland (+358)
                                        </option>
                                        <option
                                          data-countryCode="FR"
                                          value="33"
                                        >
                                          France (+33)
                                        </option>
                                        <option
                                          data-countryCode="GF"
                                          value="594"
                                        >
                                          French Guiana (+594)
                                        </option>
                                        <option
                                          data-countryCode="PF"
                                          value="689"
                                        >
                                          French Polynesia (+689)
                                        </option>
                                        <option
                                          data-countryCode="GA"
                                          value="241"
                                        >
                                          Gabon (+241)
                                        </option>
                                        <option
                                          data-countryCode="GM"
                                          value="220"
                                        >
                                          Gambia (+220)
                                        </option>
                                        <option
                                          data-countryCode="GE"
                                          value="7880"
                                        >
                                          Georgia (+7880)
                                        </option>
                                        <option
                                          data-countryCode="DE"
                                          value="49"
                                        >
                                          Germany (+49)
                                        </option>
                                        <option
                                          data-countryCode="GH"
                                          value="233"
                                        >
                                          Ghana (+233)
                                        </option>
                                        <option
                                          data-countryCode="GI"
                                          value="350"
                                        >
                                          Gibraltar (+350)
                                        </option>
                                        <option
                                          data-countryCode="GR"
                                          value="30"
                                        >
                                          Greece (+30)
                                        </option>
                                        <option
                                          data-countryCode="GL"
                                          value="299"
                                        >
                                          Greenland (+299)
                                        </option>
                                        <option
                                          data-countryCode="GD"
                                          value="1473"
                                        >
                                          Grenada (+1473)
                                        </option>
                                        <option
                                          data-countryCode="GP"
                                          value="590"
                                        >
                                          Guadeloupe (+590)
                                        </option>
                                        <option
                                          data-countryCode="GU"
                                          value="671"
                                        >
                                          Guam (+671)
                                        </option>
                                        <option
                                          data-countryCode="GT"
                                          value="502"
                                        >
                                          Guatemala (+502)
                                        </option>
                                        <option
                                          data-countryCode="GN"
                                          value="224"
                                        >
                                          Guinea (+224)
                                        </option>
                                        <option
                                          data-countryCode="GW"
                                          value="245"
                                        >
                                          Guinea - Bissau (+245)
                                        </option>
                                        <option
                                          data-countryCode="GY"
                                          value="592"
                                        >
                                          Guyana (+592)
                                        </option>
                                        <option
                                          data-countryCode="HT"
                                          value="509"
                                        >
                                          Haiti (+509)
                                        </option>
                                        <option
                                          data-countryCode="HN"
                                          value="504"
                                        >
                                          Honduras (+504)
                                        </option>
                                        <option
                                          data-countryCode="HK"
                                          value="852"
                                        >
                                          Hong Kong (+852)
                                        </option>
                                        <option
                                          data-countryCode="HU"
                                          value="36"
                                        >
                                          Hungary (+36)
                                        </option>
                                        <option
                                          data-countryCode="IS"
                                          value="354"
                                        >
                                          Iceland (+354)
                                        </option>
                                        <option
                                          data-countryCode="IN"
                                          value="91"
                                        >
                                          India (+91)
                                        </option>
                                        <option
                                          data-countryCode="ID"
                                          value="62"
                                        >
                                          Indonesia (+62)
                                        </option>
                                        <option
                                          data-countryCode="IR"
                                          value="98"
                                        >
                                          Iran (+98)
                                        </option>
                                        <option
                                          data-countryCode="IQ"
                                          value="964"
                                        >
                                          Iraq (+964)
                                        </option>
                                        <option
                                          data-countryCode="IE"
                                          value="353"
                                        >
                                          Ireland (+353)
                                        </option>
                                        <option
                                          data-countryCode="IL"
                                          value="972"
                                        >
                                          Israel (+972)
                                        </option>
                                        <option
                                          data-countryCode="IT"
                                          value="39"
                                        >
                                          Italy (+39)
                                        </option>
                                        <option
                                          data-countryCode="JM"
                                          value="1876"
                                        >
                                          Jamaica (+1876)
                                        </option>
                                        <option
                                          data-countryCode="JP"
                                          value="81"
                                        >
                                          Japan (+81)
                                        </option>
                                        <option
                                          data-countryCode="JO"
                                          value="962"
                                        >
                                          Jordan (+962)
                                        </option>
                                        <option data-countryCode="KZ" value="7">
                                          Kazakhstan (+7)
                                        </option>
                                        <option
                                          data-countryCode="KE"
                                          value="254"
                                        >
                                          Kenya (+254)
                                        </option>
                                        <option
                                          data-countryCode="KI"
                                          value="686"
                                        >
                                          Kiribati (+686)
                                        </option>
                                        <option
                                          data-countryCode="KP"
                                          value="850"
                                        >
                                          Korea North (+850)
                                        </option>
                                        <option
                                          data-countryCode="KR"
                                          value="82"
                                        >
                                          Korea South (+82)
                                        </option>
                                        <option
                                          data-countryCode="KW"
                                          value="965"
                                        >
                                          Kuwait (+965)
                                        </option>
                                        <option
                                          data-countryCode="KG"
                                          value="996"
                                        >
                                          Kyrgyzstan (+996)
                                        </option>
                                        <option
                                          data-countryCode="LA"
                                          value="856"
                                        >
                                          Laos (+856)
                                        </option>
                                        <option
                                          data-countryCode="LV"
                                          value="371"
                                        >
                                          Latvia (+371)
                                        </option>
                                        <option
                                          data-countryCode="LB"
                                          value="961"
                                        >
                                          Lebanon (+961)
                                        </option>
                                        <option
                                          data-countryCode="LS"
                                          value="266"
                                        >
                                          Lesotho (+266)
                                        </option>
                                        <option
                                          data-countryCode="LR"
                                          value="231"
                                        >
                                          Liberia (+231)
                                        </option>
                                        <option
                                          data-countryCode="LY"
                                          value="218"
                                        >
                                          Libya (+218)
                                        </option>
                                        <option
                                          data-countryCode="LI"
                                          value="417"
                                        >
                                          Liechtenstein (+417)
                                        </option>
                                        <option
                                          data-countryCode="LT"
                                          value="370"
                                        >
                                          Lithuania (+370)
                                        </option>
                                        <option
                                          data-countryCode="LU"
                                          value="352"
                                        >
                                          Luxembourg (+352)
                                        </option>
                                        <option
                                          data-countryCode="MO"
                                          value="853"
                                        >
                                          Macao (+853)
                                        </option>
                                        <option
                                          data-countryCode="MK"
                                          value="389"
                                        >
                                          Macedonia (+389)
                                        </option>
                                        <option
                                          data-countryCode="MG"
                                          value="261"
                                        >
                                          Madagascar (+261)
                                        </option>
                                        <option
                                          data-countryCode="MW"
                                          value="265"
                                        >
                                          Malawi (+265)
                                        </option>
                                        <option
                                          data-countryCode="MY"
                                          value="60"
                                        >
                                          Malaysia (+60)
                                        </option>
                                        <option
                                          data-countryCode="MV"
                                          value="960"
                                        >
                                          Maldives (+960)
                                        </option>
                                        <option
                                          data-countryCode="ML"
                                          value="223"
                                        >
                                          Mali (+223)
                                        </option>
                                        <option
                                          data-countryCode="MT"
                                          value="356"
                                        >
                                          Malta (+356)
                                        </option>
                                        <option
                                          data-countryCode="MH"
                                          value="692"
                                        >
                                          Marshall Islands (+692)
                                        </option>
                                        <option
                                          data-countryCode="MQ"
                                          value="596"
                                        >
                                          Martinique (+596)
                                        </option>
                                        <option
                                          data-countryCode="MR"
                                          value="222"
                                        >
                                          Mauritania (+222)
                                        </option>
                                        <option
                                          data-countryCode="YT"
                                          value="269"
                                        >
                                          Mayotte (+269)
                                        </option>
                                        <option
                                          data-countryCode="MX"
                                          value="52"
                                        >
                                          Mexico (+52)
                                        </option>
                                        <option
                                          data-countryCode="FM"
                                          value="691"
                                        >
                                          Micronesia (+691)
                                        </option>
                                        <option
                                          data-countryCode="MD"
                                          value="373"
                                        >
                                          Moldova (+373)
                                        </option>
                                        <option
                                          data-countryCode="MC"
                                          value="377"
                                        >
                                          Monaco (+377)
                                        </option>
                                        <option
                                          data-countryCode="MN"
                                          value="976"
                                        >
                                          Mongolia (+976)
                                        </option>
                                        <option
                                          data-countryCode="MS"
                                          value="1664"
                                        >
                                          Montserrat (+1664)
                                        </option>
                                        <option
                                          data-countryCode="MA"
                                          value="212"
                                        >
                                          Morocco (+212)
                                        </option>
                                        <option
                                          data-countryCode="MZ"
                                          value="258"
                                        >
                                          Mozambique (+258)
                                        </option>
                                        <option
                                          data-countryCode="MN"
                                          value="95"
                                        >
                                          Myanmar (+95)
                                        </option>
                                        <option
                                          data-countryCode="NA"
                                          value="264"
                                        >
                                          Namibia (+264)
                                        </option>
                                        <option
                                          data-countryCode="NR"
                                          value="674"
                                        >
                                          Nauru (+674)
                                        </option>
                                        <option
                                          data-countryCode="NP"
                                          value="977"
                                        >
                                          Nepal (+977)
                                        </option>
                                        <option
                                          data-countryCode="NL"
                                          value="31"
                                        >
                                          Netherlands (+31)
                                        </option>
                                        <option
                                          data-countryCode="NC"
                                          value="687"
                                        >
                                          New Caledonia (+687)
                                        </option>
                                        <option
                                          data-countryCode="NZ"
                                          value="64"
                                        >
                                          New Zealand (+64)
                                        </option>
                                        <option
                                          data-countryCode="NI"
                                          value="505"
                                        >
                                          Nicaragua (+505)
                                        </option>
                                        <option
                                          data-countryCode="NE"
                                          value="227"
                                        >
                                          Niger (+227)
                                        </option>
                                        <option
                                          data-countryCode="NG"
                                          value="234"
                                        >
                                          Nigeria (+234)
                                        </option>
                                        <option
                                          data-countryCode="NU"
                                          value="683"
                                        >
                                          Niue (+683)
                                        </option>
                                        <option
                                          data-countryCode="NF"
                                          value="672"
                                        >
                                          Norfolk Islands (+672)
                                        </option>
                                        <option
                                          data-countryCode="NP"
                                          value="670"
                                        >
                                          Northern Marianas (+670)
                                        </option>
                                        <option
                                          data-countryCode="NO"
                                          value="47"
                                        >
                                          Norway (+47)
                                        </option>
                                        <option
                                          data-countryCode="OM"
                                          value="968"
                                        >
                                          Oman (+968)
                                        </option>
                                        <option
                                          data-countryCode="PW"
                                          value="680"
                                        >
                                          Palau (+680)
                                        </option>
                                        <option
                                          data-countryCode="PA"
                                          value="507"
                                        >
                                          Panama (+507)
                                        </option>
                                        <option
                                          data-countryCode="PG"
                                          value="675"
                                        >
                                          Papua New Guinea (+675)
                                        </option>
                                        <option
                                          data-countryCode="PY"
                                          value="595"
                                        >
                                          Paraguay (+595)
                                        </option>
                                        <option
                                          data-countryCode="PE"
                                          value="51"
                                        >
                                          Peru (+51)
                                        </option>
                                        <option
                                          data-countryCode="PH"
                                          value="63"
                                        >
                                          Philippines (+63)
                                        </option>
                                        <option
                                          data-countryCode="PL"
                                          value="48"
                                        >
                                          Poland (+48)
                                        </option>
                                        <option
                                          data-countryCode="PT"
                                          value="351"
                                        >
                                          Portugal (+351)
                                        </option>
                                        <option
                                          data-countryCode="PR"
                                          value="1787"
                                        >
                                          Puerto Rico (+1787)
                                        </option>
                                        <option
                                          data-countryCode="QA"
                                          value="974"
                                        >
                                          Qatar (+974)
                                        </option>
                                        <option
                                          data-countryCode="RE"
                                          value="262"
                                        >
                                          Reunion (+262)
                                        </option>
                                        <option
                                          data-countryCode="RO"
                                          value="40"
                                        >
                                          Romania (+40)
                                        </option>
                                        <option data-countryCode="RU" value="7">
                                          Russia (+7)
                                        </option>
                                        <option
                                          data-countryCode="RW"
                                          value="250"
                                        >
                                          Rwanda (+250)
                                        </option>
                                        <option
                                          data-countryCode="SM"
                                          value="378"
                                        >
                                          San Marino (+378)
                                        </option>
                                        <option
                                          data-countryCode="ST"
                                          value="239"
                                        >
                                          Sao Tome & Principe (+239)
                                        </option>
                                        <option
                                          data-countryCode="SA"
                                          value="966"
                                        >
                                          Saudi Arabia (+966)
                                        </option>
                                        <option
                                          data-countryCode="SN"
                                          value="221"
                                        >
                                          Senegal (+221)
                                        </option>
                                        <option
                                          data-countryCode="CS"
                                          value="381"
                                        >
                                          Serbia (+381)
                                        </option>
                                        <option
                                          data-countryCode="SC"
                                          value="248"
                                        >
                                          Seychelles (+248)
                                        </option>
                                        <option
                                          data-countryCode="SL"
                                          value="232"
                                        >
                                          Sierra Leone (+232)
                                        </option>
                                        <option
                                          data-countryCode="SG"
                                          value="65"
                                        >
                                          Singapore (+65)
                                        </option>
                                        <option
                                          data-countryCode="SK"
                                          value="421"
                                        >
                                          Slovak Republic (+421)
                                        </option>
                                        <option
                                          data-countryCode="SI"
                                          value="386"
                                        >
                                          Slovenia (+386)
                                        </option>
                                        <option
                                          data-countryCode="SB"
                                          value="677"
                                        >
                                          Solomon Islands (+677)
                                        </option>
                                        <option
                                          data-countryCode="SO"
                                          value="252"
                                        >
                                          Somalia (+252)
                                        </option>
                                        <option
                                          data-countryCode="ZA"
                                          value="27"
                                        >
                                          South Africa (+27)
                                        </option>
                                        <option
                                          data-countryCode="ES"
                                          value="34"
                                        >
                                          Spain (+34)
                                        </option>
                                        <option
                                          data-countryCode="LK"
                                          value="94"
                                        >
                                          Sri Lanka (+94)
                                        </option>
                                        <option
                                          data-countryCode="SH"
                                          value="290"
                                        >
                                          St. Helena (+290)
                                        </option>
                                        <option
                                          data-countryCode="KN"
                                          value="1869"
                                        >
                                          St. Kitts (+1869)
                                        </option>
                                        <option
                                          data-countryCode="SC"
                                          value="1758"
                                        >
                                          St. Lucia (+1758)
                                        </option>
                                        <option
                                          data-countryCode="SD"
                                          value="249"
                                        >
                                          Sudan (+249)
                                        </option>
                                        <option
                                          data-countryCode="SR"
                                          value="597"
                                        >
                                          Suriname (+597)
                                        </option>
                                        <option
                                          data-countryCode="SZ"
                                          value="268"
                                        >
                                          Swaziland (+268)
                                        </option>
                                        <option
                                          data-countryCode="SE"
                                          value="46"
                                        >
                                          Sweden (+46)
                                        </option>
                                        <option
                                          data-countryCode="CH"
                                          value="41"
                                        >
                                          Switzerland (+41)
                                        </option>
                                        <option
                                          data-countryCode="SI"
                                          value="963"
                                        >
                                          Syria (+963)
                                        </option>
                                        <option
                                          data-countryCode="TW"
                                          value="886"
                                        >
                                          Taiwan (+886)
                                        </option>
                                        <option data-countryCode="TJ" value="7">
                                          Tajikstan (+7)
                                        </option>
                                        <option
                                          data-countryCode="TH"
                                          value="66"
                                        >
                                          Thailand (+66)
                                        </option>
                                        <option
                                          data-countryCode="TG"
                                          value="228"
                                        >
                                          Togo (+228)
                                        </option>
                                        <option
                                          data-countryCode="TO"
                                          value="676"
                                        >
                                          Tonga (+676)
                                        </option>
                                        <option
                                          data-countryCode="TT"
                                          value="1868"
                                        >
                                          Trinidad & Tobago (+1868)
                                        </option>
                                        <option
                                          data-countryCode="TN"
                                          value="216"
                                        >
                                          Tunisia (+216)
                                        </option>
                                        <option
                                          data-countryCode="TR"
                                          value="90"
                                        >
                                          Turkey (+90)
                                        </option>
                                        <option data-countryCode="TM" value="7">
                                          Turkmenistan (+7)
                                        </option>
                                        <option
                                          data-countryCode="TM"
                                          value="993"
                                        >
                                          Turkmenistan (+993)
                                        </option>
                                        <option
                                          data-countryCode="TC"
                                          value="1649"
                                        >
                                          Turks & Caicos Islands (+1649)
                                        </option>
                                        <option
                                          data-countryCode="TV"
                                          value="688"
                                        >
                                          Tuvalu (+688)
                                        </option>
                                        <option
                                          data-countryCode="UG"
                                          value="256"
                                        >
                                          Uganda (+256)
                                        </option>
                                        <option
                                          data-countryCode="GB"
                                          value="44"
                                        >
                                          UK (+44)
                                        </option>
                                        <option
                                          data-countryCode="UA"
                                          value="380"
                                        >
                                          Ukraine (+380)
                                        </option>
                                        <option
                                          data-countryCode="AE"
                                          value="971"
                                        >
                                          United Arab Emirates (+971)
                                        </option>
                                        <option
                                          data-countryCode="UY"
                                          value="598"
                                        >
                                          Uruguay (+598)
                                        </option>
                                        <option data-countryCode="US" value="1">
                                          USA (+1)
                                        </option>
                                        <option data-countryCode="UZ" value="7">
                                          Uzbekistan (+7)
                                        </option>
                                        <option
                                          data-countryCode="VU"
                                          value="678"
                                        >
                                          Vanuatu (+678)
                                        </option>
                                        <option
                                          data-countryCode="VA"
                                          value="379"
                                        >
                                          Vatican City (+379)
                                        </option>
                                        <option
                                          data-countryCode="VE"
                                          value="58"
                                        >
                                          Venezuela (+58)
                                        </option>
                                        <option
                                          data-countryCode="VN"
                                          value="84"
                                        >
                                          Vietnam (+84)
                                        </option>
                                        <option
                                          data-countryCode="VG"
                                          value="84"
                                        >
                                          Virgin Islands - British (+1284)
                                        </option>
                                        <option
                                          data-countryCode="VI"
                                          value="84"
                                        >
                                          Virgin Islands - US (+1340)
                                        </option>
                                        <option
                                          data-countryCode="WF"
                                          value="681"
                                        >
                                          Wallis & Futuna (+681)
                                        </option>
                                        <option
                                          data-countryCode="YE"
                                          value="969"
                                        >
                                          Yemen (North)(+969)
                                        </option>
                                        <option
                                          data-countryCode="YE"
                                          value="967"
                                        >
                                          Yemen (South)(+967)
                                        </option>
                                        <option
                                          data-countryCode="ZM"
                                          value="260"
                                        >
                                          Zambia (+260)
                                        </option>
                                        <option
                                          data-countryCode="ZW"
                                          value="263"
                                        >
                                          Zimbabwe (+263)
                                        </option>
                                      </optgroup>
                                    </select>

                                    <input
                                      type="tel"
                                      className="form-control"
                                      placeholder="enter your Phone name"
                                      id="contact_number"
                                      name="contact_number"
                                      value=""
                                      formControlName="contact_number"
                                      style={{ borderRadius: "9px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  disabled
                                  type="submit"
                                  className="btn animation_btn"
                                  id="formSubmit"
                                  data-id="form5"
                                >
                                  Finish
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuote;
