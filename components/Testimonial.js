/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/css/Testimonial.module.css";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <div style={{padding:"20px 0", textAlign: "center",overflow: "hidden" }}>
        <div  className="section_title py-4">
          <h1 >
            <span  className="mycolor"> WHAT OUR CLIENTS </span>
            <span  className="bottom_Textline_center position-relative">SAY</span>
          </h1>
        </div>
        <Slider
          className={styles.mainSlider}
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          infinite={true}
          centerPadding="100px"
          arrows={false}
        >
          <div className={styles.uppertestiImage}>
            <img
              width="160"
              height="160"
              src="/images/testimonial/chritina Dragoi.png"
              alt=""
            />
          </div>
          <div className={styles.uppertestiImage}>
            <img
              width="160"
              height="160"
              src="/images/testimonial/Ivan Loorced.png"
              alt=""
            />
          </div>
          <div className={styles.uppertestiImage}>
            <img
              width="160"
              height="160"
              src="/images/testimonial/Yohei Kamakashi.png"
              alt=""
            />
          </div>
          <div className={styles.uppertestiImage}>
            <img
              width="160"
              height="160"
              src="/images/testimonial/Paula Brown.png"
              alt=""
            />
          </div>
          <div className={`${styles.uppertestiImage}`}>
            <img
              className="rounded-circle"
              width="160"
              height="160"
              src="/images/testimonial/SEAN WILLIAMS.jpg"
              alt=""
            />
          </div>
        </Slider>

        <Slider
          arrows={false}
          asNavFor={nav2}
          ref={slider1}
          className="text-center"
        >
          <div>
            <div className="row justify-content-center">
              <div className="col-7">
                <div className="quotes"></div>
                <h2>Christina Dragoi</h2>
                <p className="">Germany</p>
                <span className="star">
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                </span>
                <p>
                  The services provided by Webapp are the best. I find that they
                  have excellent application development skills and experts.
                  What I really appreciate is the professionalism and skills
                  that they presented all this while. I would recommend them for
                  their development team
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-7">
                <h2 className="fw-bolder">Ivan Loorced</h2>
                <p className="">USA</p>

                <span className="star">
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                </span>
                <p>
                  Despite being a little skeptical about working with Webapp,
                  once I saw their work, I did not doubt that I had made the
                  right decision. Their teams are highly professional and know
                  how to use their expertise to improve a project.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-7">
                <h2 className="fw-bolder">Yohei Kamakashi</h2>
                <p className="">UK</p>

                <span className="star">
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                </span>
                <p>
                  In the digital era where a new agency is formed each day, it
                  is a task to find one that understands your requirements and
                  can share the load off your shoulders. We’re impressed with
                  Webapp, not only in terms of deliverables but also their
                  leadership skills. Their teamwork in getting the desired
                  outcomes is commendable. The energy and enthusiasm this
                  company holds are strong and beautiful.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-7">
                <h2 className="fw-bolder">Paula Brown </h2>
                <p className="">US</p>

                <span className="star">
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                </span>
                <p>
                  The people at Webapp delivered far beyond what was expected.
                  Even after multiple suggestions & revisions for us to review,
                  nothing was too much of an effort for them. They made sure we
                  were happy and content with the quality work.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-7">
                <h2 className="fw-bolder"     >SEAN WILLIAMS</h2>
                <p className="">UK</p>

                <span className="star">
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                  <AiFillStar size={25} color="yellow" />
                </span>
                <p>
                  Our business has found Webapp to be extremely beneficial. We
                  would like to extend a special thank you to the Webapp team
                  for their flexibility and speedy turnaround. The attention
                  they provide to every small detail really makes them stand
                  out. They are flexible, innovative and easy to work with. They
                  are worth the recommendation.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
