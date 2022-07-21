import Image from "next/image";
import Head from 'next/head'
import React from "react";
import styles from "./mobile-css/android.module.css";
import ProcessWeFollow from "/components/ProcessWeFollow";

import { motion } from "framer-motion";
import IndustriesWeServe from "../../../components/IndustriesWeServe";

const AndroidAppDevelopment = () => {
  return (
    <>
      <Head>
        <title>Android App Development Services | Webapp UK UK</title>
        <meta
          name="description"
          content="App Developers In Webapp provides Android App development services which help in building custom Android applications that help businesses grow."
        />
        <meta
          name="keywords"
          content="Ios and android app development,
Android app development software,
Android app development tools,
App development services uk"
        />

        <link
          rel="canonical"
          href="https://www.webapp.world/services/mobile-app-trends/android-app-development/"
        />
      </Head>

      <div className="inner_page">
        <section className={`${styles.androidbg} ${styles.yellow}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center text-white">
                <div className="top_text">
                  <h1>We Are Android App Designers & Developers.</h1>
                  <p className="my-3">Let`s Build an Awesome App for You!</p>

                  <div className="my_button mt-5">
                    <a>
                      <button className="close">Let`s Discuss Your Idea</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12  ">
                <Image
                  width={700}
                  height={700}
                  src="/images/servies/pagesImage/Android app development tools.png"
                  alt="Android app development tools"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="card_section bg-gray">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-sm-12  header_img1 "
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <Image
                  width={700}
                  height={700}
                  src="/images/servies/pagesImage/App development services uk.png"
                  alt="App development services uk"
                />
              </div>

              <div
                className="col-md-6 right_text main_heading"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h1 className="mb-5 ">
                  <span className="mycolor">Why Choose us for Android</span>
                  <br />
                  <span className="bottom_Textline_center position-relative">
                    App Development?
                  </span>
                </h1>
                <p>
                  Our expert Android app developers have the necessary
                  experience and expertise in Android app development software
                  to ensure high performance and excellence. We deliver bespoke
                  development services in the US, UK, and across the globe which
                  ensures that start-ups & businesses gain consistent growth and
                  maximum return on their IT Investments. Being a top-rated UK
                  Android application development company on platforms like
                  Clutch, Extract, and GoodFirms, we endeavour to deliver
                  audience-captive and business-driven services that are
                  innovative and business-focused.
                </p>
                <p className="mt-2">
                  We work with the latest Android 12 (Snow Cone) and the latest
                  technology stack, including Android SDK, Android Studio, Java,
                  Java/j2ME, C++, SQL Lite, Kotlin, Linux, and beyond.
                </p>

                <div className="mt-5 my_button small_button">
                  <a>
                    <button className="close">Talk To Our Experts</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="technology py-5" data-aos="zoom-out-up">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <div className="language_text text-center">
                  <h1>
                    <span className="mycolor"> Technology Stack </span>
                    <span className="bottom_Textline_center position-relative">
                      We Use{" "}
                    </span>
                  </h1>
                  <p className="mt-5">
                    We pair your mobile apps with the ideal technologies to
                    provide a complete end-to-end solution. We develop powerful
                    backends using Node.js, Yii and Laravel with databases such
                    as MongoDB, MySQL, PostgreSQL, and Redis.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row row-cols-3 row-cols-lg-4 langulage_card p-2 justify-content-center langulage_card">
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/Kotlin.png"
                        alt="Kotlin"
                      />
                      <p className="card-text">Kotlin</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/icon/reactjs.svg"
                        alt="react js"
                      />
                      <p className="card-text">React Native</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/icon/nodejs.svg"
                        alt="nodejs"
                      />
                      <p className="card-text">Node JS</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/django.png
                                "
                        alt="django"
                      />
                      <p className="card-text">Django</p>
                    </div>
                  </div>
                </div>

                <div className="row langulage_card">
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/android.png"
                        alt="android"
                      />
                      <p className="card-text">Android Studio</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/figma.png"
                        alt="figma"
                      />
                      <p className="card-text">Figma</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/xd.png "
                        alt="xd"
                      />
                      <p className="card-text">Adobe XD</p>
                    </div>
                  </div>
                </div>

                <div className="row langulage_card">
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/sqlLite.png"
                        alt="sqlLite"
                      />
                      <p className="card-text">SQLite</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/mongodb.png"
                        alt="mongodb"
                      />
                      <p className="card-text">MongoDB</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="50px"
                        height="50px"
                        src="/images/servies/ios/mysql.png "
                        alt="mysql"
                      />
                      <p className="card-text">MYSQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <IndustriesWeServe/>
      <ProcessWeFollow />
    </>
  );
};

export default AndroidAppDevelopment;
