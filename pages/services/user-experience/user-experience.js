import React from "react";
import styles from "./user-css/user-experience.module.css";
import Image from "next/image";
import Head from "next/head";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";

const UserExperience = () => {
  return (
    <>
      <Head>
        <title>User Experience Service Provider | Webapp UK</title>
        <meta
          name="description"
          content="Providing innovative User Experience services, Webapp UK aims to help companies design intuitive solutions to enhance their digital experience."
        />
        <meta
          name="keywords"
          content="User experience vs user interface,
User experience,
User experience website,
User experience examples"
        />

<link
          rel="canonical"
          href="https://www.webapp.world/services/user-experience/user-experience"
        />
      </Head>

      <div className="web_homePage">
        <div className={styles.web_image}>
          <Image
            width={2000}
            height={900}
            src="/images/servies/pagesImage/User-Experience.png"
            alt="User-Experience"
          />
          <div className={styles.web_text}>
            <h1>
              USER <br />
              <span className="bottom_Textline_center position-relative">
                EXPERIENCE
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mobile_content my-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container web_content_text  bg-light rounded-5 p-5">
          <p>
            Optimising user experience is essential. Aesthetics and
            functionality or UI/UX design have irreplaceable importance in the
            development of websites and applications. Whether it is a website or
            an application, it must have an eye-catching design. It should also
            match your ideas and have user-friendly features. At Webapp, we make
            sure your website looks great and the features are easy to use. So,
            let`s work together and make the most of this opportunity. We will
            provide services such as wireframe design, as well as UI/UX designs.
            We believe in creating websites with unparalleled UI and UX design,
            meeting customers requirements, and giving them creative ideas to
            improve their judgement. Webapp offers you these services at a
            reasonable price that will not burn a hole in your pocket. Take a
            look at some of our eye-catching features.
          </p>

          <p>
            Using the best mobile app development tools, we offer custom mobile
            app solutions for your business. The techniques used to develop a
            robust and responsive app will bring double-digit profits to your
            pocket. Webapp`s mobile app developers are experienced in
            experimenting with new features for existing apps or making
            significant changes to the app`s current functionality. Our goal is
            to develop an application focused on the objectives and results
            desired for each client.
          </p>

          <div className="p-4">
            <ul>
              <li style={{ listStyle: "inside" }}>
                The best UI/UX theme that attracts the audience
              </li>
              <li style={{ listStyle: "inside" }}>
                A friendly service that will not affect your finances
              </li>
              <li style={{ listStyle: "inside" }}>
                Robust features that provide a good user experience
              </li>
              <li style={{ listStyle: "inside" }}>
                Awesome design and easy-to-use buttons
              </li>
              <li style={{ listStyle: "inside" }}>
                Fast deployment given the deadline
              </li>
              <li style={{ listStyle: "inside" }}>
                Support and service available immediately
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <div className="follow_process my-5">
          <div className="text-center">
            <h1>
              <span className="mycolor">User Experience</span>
              <span className="bottom_Textline_center position-relative">
                Services
              </span>
            </h1>
          </div>
          <div className="follow_process_main mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 wow fadeInLeft" data-wow-delay="0.1s">
                  <Image
                    width={800}
                    height={1000}
                    className={styles.img}
                    src="/images/servies/pagesImage/Wireframe-for-website.png"
                    alt="Wireframe-for-website"
                  />
                </div>
                <div
                  className="col-md-7 follow_process_text mt-4 wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="text-start">
                    <h2>
                      <span className="bottom_Textline_center position-relative">
                        Wireframe
                      </span>
                    </h2>
                    <p>
                      Clear thinking has never been our thing, rather we believe
                      in doing things in the most innovative way, making us the
                      best wireframe development company in India. With our
                      design team on board, we are able to keep up with
                      tradition and trends.
                    </p>
                  </div>

                  <a
                    className="nav-link moreBtn nav-link mt-5"
                    routerLink="/user-experience/wireframe-design"
                  >
                    Read More<i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="row sm-column-reverse">
                <div
                  className="col-md-7 follow_process_text wow fadeInLeft align-items-end"
                  data-wow-delay="0.1s"
                >
                  <div className="text-lg-end text-sm-start">
                    <h2>
                      <span className="bottom_Textline_center position-relative">
                        UI/UX
                      </span>
                    </h2>
                    <p>
                      Create solutions that deliver amazing user experiences
                      with our development services focused on user-centric
                      designs. Our solutions are the way to provide your
                      customers with a seamless experience.
                    </p>
                  </div>

                  <a
                    className="nav-link moreBtn nav-link mt-5"
                    routerLink="/user-experience/ui-ux-design"
                  >
                    Read More<i className="ti-arrow-right"></i>
                  </a>
                </div>
                <div className="col-md-5 wow fadeInRight" data-wow-delay="0.1s">
                  <Image
                    width={800}
                    height={800}
                    className="img-fluid"
                    src="/images/servies/pagesImage/Ios-App-development-services.png"
                    alt="Ios-App-development-services"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe/>
      <ProcessWeFollow />
    </>
  );
};

export default UserExperience;
