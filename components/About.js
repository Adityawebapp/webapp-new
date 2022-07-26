/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";

const About = () => {

  

  return (
    <>
      <section className="py-5 about_main wow zoomIn">
        <div className="container py-5">
          {/* <div className="bg-image-about">
            <Image src={bgDot} alt="about" />
          </div> */}
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-3">
                <span className="mycolor">
                  About
                </span>
                <span className="bottom_Textline_center position-relative"> Us </span>
              </h1>
              <p className="">
                <b>Webapp</b> is a leading
                <b> Software Development Company in the UK </b> offering
                technical expertise and high-quality end products. We always
                choose quality and, as a leading{" "}
                <b> mobile app development company,</b> we use modern
                technologies. We understand your goals and plans and adapt them
                flexibly and decisively to fit your budget. <b>Webapp</b> offers
                customised solutions based on customer requirements at
                cost-effective prices and within a specified time frame. We
                attach great importance to high reliability, scalability,
                innovation, and strong growth, so we offer a wide range of
                product development and other services. We are a young team full
                of energy, enthusiasm, and the desire to work. We believe in
                synergies and mutual growth. You grow, we grow! We are
                passionate about programming your success, which is why we use
                agile methodologies throughout our organisation.
              </p>
            </div>

            <div className="col-md-6">
              <img
                
                className="img-fluid"
                alt="home-page-aboutus.png"
                src="/images/servies/pagesImage/home-page-aboutus.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
