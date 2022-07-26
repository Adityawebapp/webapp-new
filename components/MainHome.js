/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/css/MainHome.module.css";
import { motion, AnimatePresence } from "framer-motion";

const MainHome = () => {
  return (
    <>
      {/* <motion.video
        autoPlay
        muted
        loop
        className={styles.video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </motion.video> */}

      <section className={styles.heroSec}>
        <img className="hero-image" src="/images/bg/home_image.jpg" />
        <img
          className={styles.mobileImage}
          src="/images/bg/mobile_image.jpg   " />

        <div className={styles.imageOverlay}>
          <div className="container h-100">
            <div className="row align-items-center justify-content-start h-100 text-sm-center text-lg-start text-md-start">
              <div className="col-lg-7 col-md-7 col-sm-12 home_text text-white">
                <h3 className=" fst-italic ">
                  taking your business to the next level
                </h3>
                <p className="" style={{marginTop:"2rem"}}>
                  We Successfully Deliver Mobile Apps, Websites, and Games that
                  are fully <br/> customisable and created specifically to your
                  requirements
                </p>
                <p className="" style={{marginTop:"2rem"}}>
                  We always strive for excellence with each and every Mobile App
                  and <br/> Website we build
                </p>
                <a routerLink="getintouch">
                  <button className={styles.homeBtn}>
                    Get In Touch
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHome;
