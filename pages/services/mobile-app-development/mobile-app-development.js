/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "./mobile-css/mobile-app.module.css";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";

const MobileAppDevelopment = () => {
  return (
    <>
      <Head>
        <title>
          Mobile app developers | Custom Mobile app development |Webapp UK
        </title>
        <meta
          name="description"
          content="The custom mobile app development company Webapp UK focuses on offering optimal quality custom and hybrid mobile app services provided by our expert developers."
        />
        <meta
          name="keywords"
          content="Software Development Company in UK,
Software Developers,
Software Developers London,
Web developers UK"
        />

        <link
          rel="canonical"
          href="https://www.webapp.world/services/mobile-app-development/Mobile-app-development/"
        />
      </Head>

      <div className={styles.web_homePage}>
        <div className={styles.web_image}>
          <img
            src="/images/servies/pagesImage/Mobile-APP-Development-Company.png"
            alt="Mobile-APP-Development-Company"
          />
          <div className={styles.web_text}>
            <h1>
              MOBILE APP
              <br />
              <span className="bottom_Textline_center position-relative">
                {" "}
                DEVELOPMENT{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mobile_content my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container web_content_text  bg-gray p-5 rounded">
          <p>
            Everyone wants to give their business the best app out there. With
            our technical acumen, Webapp’s comprehensive and multi-faceted
            custom mobile application development services are committed to
            providing easy-to-use applications designed specifically for you and
            your business. We are the leading custom mobile app development
            services company, offering the best apps in the world. Our
            innovative technology and app development services help us build
            apps that help your business run on billions of devices around the
            world! From building an app from scratch to fixing a broken app, we
            focus on the technology while you focus on the rest! You tell us
            what you want, and we deliver it to you: simple products that meet
            or even exceed your expectations! Exactly how you want them. We have
            the best, highly qualified and cutting-edge mobile application
            developers. We have a great deal of experience and creativity in
            creating stunning mobile applications for various clients all over
            the world.
          </p>

          <p className="mt-4">
            Using the best mobile app development tools, we offer custom mobile
            app solutions for your business. The techniques used to develop a
            robust and responsive app will bring double-digit profits to your
            pocket. Webapp’s mobile app developers are experienced in
            experimenting with new features for existing apps or making
            significant changes to the app’s current functionality. Our goal is
            to develop an application focused on the objectives and results
            desired for each client.
          </p>
        </div>
      </div>

      <div className="container wow fadeInUp">
        <div className="development_services mb-5">
          <div className="text-center top_text py-5">
            <h1>
              <span className="mycolor">Mobile App </span>
              <span className="bottom_Textline_center position-relative">
                Development Services
              </span>
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5">
            <Link href="/mobile-app-development/android-app-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <img
                        src="/images/homeImage/gif/Android.gif"
                        className="img-fluid"
                        alt="Android"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Android</h2>
                      <p className="card-text">
                        Webapp UK aims to provide the best Android app
                        development services. Our customers can target a wide
                        range of Android users with our natively designed
                        mobility solutions for the Play Store and other
                        Android-connected platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <a routerLink="/mobile-app-development/ios-app-development">
              <div className="col main_card_div text-center">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <img
                    
                      src="/images/homeImage/gif/ios-game.gif"
                      className="card-img-top"
                      alt="ios-game"
                    />
                  </div>
                  <div className="card-body framework_text">
                    <h2 className="card-title">IOS</h2>
                    <p className="card-text">
                      We provide our clients with scalable iOS and iPhone mobile
                      applications that grow with their business. Our
                      world-class custom iOS app development services bring you
                      the best performing apps on the App Store.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <Link href="/mobile-app-development/flutter-app-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <img
                        src="/images/homeImage/gif/g/flutter.gif"
                        className="card-img-top"
                        alt="flutter"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Flutter</h2>
                      <p className="card-text">
                        Without knowing it, you have probably already used the
                        applications built with Flutter. But why should you use
                        Flutter app development for your project? Contact us
                        today for more information.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <IndustriesWeServe/>
      <ProcessWeFollow />
    </>
  );
};

export default MobileAppDevelopment;
