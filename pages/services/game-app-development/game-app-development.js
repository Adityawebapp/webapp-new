/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "./game-css/game-development.module.css";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";
import CompanyProduct from "../../../components/CompanyProduct";
import HowToHelp from "../../../components/HowToHelp";
import GetInTouch from "../../../components/GetInTouch";
import Testimonial from "../../../components/Testimonial";
import WhyWebapp from "../../../components/WhyWebapp";

const GameAppDevelopment = () => {
  return (
    <>
      <Head>
        <title>Game Development Services - Webapp UK</title>
        <meta
          name="description"
          content="Webapp based in UK is a popular Game Development Company with Certified Unity Game Developers. Our services include developing single & multi player games."
        />
        <meta
          name="keywords"
          content="Game Development Comapny,
Game development software,
Game development companies uk,
Game development tools,
Game development companies"
        />

        <link
          rel="canonical"
          href="https://www.webapp.world/mobile-app-development/iOS-app-development/"
        />
      </Head>

      <div className={styles.web_homePage}>
        <div className={styles.web_image}>
          <img
            className={styles.img}
            src="/images/servies/pagesImage/Top-Game-Development-Company.png"
            alt="Top-Game-Development-Company"
          />
          <div className={styles.web_text}>
            <h1>
              GAME
              <br />
              <span className="bottom_Textline_center position-relative">
                {" "}
                DEVELOPMENT{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>


      <CompanyProduct/>



      <div className="mobile_content my-5 wow fadeInUp">
        <div className="container web_content_text bg-gray p-5" style={{borderRadius: "30px"}}>
          <p>
            As the gaming industry transforms into a mighty multi-billion-dollar
            substance, the need for games released to the market is increasing.
            In this way, choosing the right game development company to develop
            your game is a fundamental decision. With our exceptional
            combination of dedication and skill, we provide comprehensive game
            development services to make your title a superior choice for your
            audience. As one of the best game development companies UK, Webapp
            can help you develop a game at the highest level of quality. Our
            game developers will resolve all development and delivery issues
            with an extensive testing cycle. Ideal for graphics-heavy games -
            which is typical for one-on-one shooters, procedural, stealth, and
            action-adventure games - this enables web application game
            developers to create visually stunning encounters for gamers around
            the world.
          </p>

          <p className="mt-4">
            Webapp offers end-to-end game development services at affordable
            prices. Our youth team has experience playing some of the best games
            in the industry, including hyper-casual games, multiplayer
            role-playing games, and virtual reality games. For the past ten
            years, we have been developing games for mobile, PC, and online
            platforms using cutting-edge development technologies in the right
            way to bring you the most dynamic games. So look to Webapp if you
            want your game developed by one of the best game development
            companies!
          </p>
        </div>
      </div>

      <section>
        <div className="follow_process mb-5">
          <div className="text-center">
            <h2 className="fw-bolder">
              <span className="mycolor"> Game Development </span>
              <span className="bottom_Textline_center position-relative"> Services </span>
            </h2>
          </div>
          <div className="follow_process_main mt-5">
            <div className="container">
              <div className="row text-sm-center ">
                <div className="col-md-5 wow fadeInLeft Android-game-development">
                  <img
                    width="60%"
                    src="/images/servies/pagesImage/Android-game-development-Company.png"
                    alt="Android-game-development-Company"
                  />
                </div>
                <div className="col-md-7 follow_process_text wow fadeInRight">
                  <div className="text-start">
                    <h2 className="">
                      <span className="mycolor"> Android Game </span>
                      <span className="bottom_Textline_center position-relative">
                        Development
                      </span>
                    </h2>
                    <p className="mt-4 fs-6">
                      If you are looking for the best company to hire Android
                      game developers, take it easy - you have come to the right
                      place. Our Android game development team knows how to
                      create games that are sure to resonate with your target
                      audience.
                    </p>
                  </div>
                  <div className="text-start w-100">
                  <Link href="/game-app-development/ios-game-development">
                    <a className="nav-link morebtn mt-5">
                      Read More<i className="ti-arrow-right "></i>
                    </a>
                  </Link>
                  </div>
                </div>
              </div>

              <div className="row sm-column-reverse text-sm-center align-items-center">
                <div className="col-md-7 follow_process_end wow fadeInLeft">
                  <div className="text-lg-end text-sm-start">
                    <h2 className="fw-bolder">
                      <span className="mycolor"> IOS Game </span>
                      <span className="bottom_Textline_center position-relative">
                        Development
                      </span>
                    </h2>
                    <p className="mt-4 fs-6">
                      The iPhone is one of the most popular smartphones in use
                      today, making it an important platform for gaming. As an
                      experienced iOS game development company, we have created
                      a number of 2D and 3D iPhone games in different genres.
                    </p>
                  </div>
                 <div className="text-end ">
                  <Link href="/game-app-development/Android-game-development">
                    <a className="nav-link morebtn  mt-5">
                      Read More<i className="ti-arrow-right "></i>
                    </a>
                  </Link>
                  </div>
                </div>
                <div className="col-md-5 text-end wow fadeInRight Best-IOS-game-development">
                  <img
                    width="60%"
                    src="/images/servies/pagesImage/Best IOS game development company.png"
                    alt="Best IOS game development company"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <WhyWebapp/>
      <ProcessWeFollow />
      <ProcessWeFollow />
      <HowToHelp/>
      <GetInTouch/>
      <Testimonial/>
    </>
  );
};

export default GameAppDevelopment;
