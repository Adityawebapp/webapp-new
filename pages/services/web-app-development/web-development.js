import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./webapp-css/web.module.css";
import Head from "next/head";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";

const WebAppDevelopment = () => {
  return (
    <>
      <Head>
        <title>
          Web Development application Services | Web Developers | Webapp UK
        </title>
        <meta
          name="description"
          content="Webapp UK is a top-notch Web development company with web developers who provide Web Development application services which will benefit businesses with trends."
        />
        <meta
          name="keywords"
          content="Web app Development,
Website Developemnt Software,
Web development uk,
Website development uk,
Web development companies uk"
        />

        <link
          rel="canonical"
          href="https://www.webapp.world/services/web-app-development/web-development/"
        />
      </Head>

      <div className={styles.web_homePage}>
        <div className={styles.web_image}>
          <Image
            width={2000}
            height={1000}
            src="/images/servies/pagesImage/Website-Development.png"
            alt="Website-Development"
          />
          <div className={styles.web_text}>
            <h1>
              WEBSITE <br />
              <span className="bottom_Textline_center position-relative">
                DEVELOPMENT
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mobile_content my-5">
        <div className="container web_content_text bg-light p-4 rounded">
          <p>
            If you want creative UK website application development services,
            you`ve come to the right place! At Webapp we have designed many
            different websites for our valued customers. This has given us
            control and experience in this field. We will provide you with
            comprehensive information to help you align with your target
            audience.
          </p>

          <p className="mt-4">
            Webapp provides custom website development software for your
            projects. Website development is the most important step in managing
            a successful online presence for a new business. But there are
            multitudes of web design and development companies all over the
            world that claim to offer the best web development services. Our
            dedicated web application developers are always up for the challenge
            and do their best to develop the software product. Webapp hires web
            developers through various case studies and an interview process
            that helps us with potential web development and ensures clients
            find the best services. Extract your requirements and start your
            online business with a web application. Webapp provides developers
            with clear project requirements through research and various case
            studies.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="development_services mb-5">
          <div className="text-center top_text py-5">
            <h1>
              <span className="mycolor"> Website Development </span>
              <span className="bottom_Textline_center position-relative">
                Services
              </span>
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            <Link href="/services/web-app-development/reactjs-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/g/react.gif"
                        className="card-img-top"
                        alt="react"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">React</h2>
                      <p className="card-text">
                        Master all major Android and iOS platforms with one
                        effective solution. Our React Native app development
                        services help clients achieve their goals.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/services/web-app-development/angular-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/angular.gif"
                        className="card-img-top"
                        alt="angular"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Angular</h2>
                      <p className="card-text">
                        Webapp is a leading angular development company in India
                        with years of experience in developing industrial grade
                        sophisticated web and mobile applications.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/services/web-app-development/php-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/g/php.gif"
                        className="card-img-top"
                        alt="php"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Php</h2>
                      <p className="card-text">
                        With our PHP development services, we strive to help
                        your business get better value and achieve better
                        results for maximum growth.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/services/web-app-development/laravel-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/g/laravel.gif"
                        className="card-img-top"
                        alt="laravel"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Laravel</h2>
                      <p className="card-text">
                        Leveraging Laravel`s drivers and dynamic development
                        capabilities, our experts build solutions with a robust
                        backend that forms the backbone of our seamless
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/services/web-app-development/django-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/python.gif"
                        className="card-img-top"
                        alt="python"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Python / Djongo</h2>
                      <p className="card-text">
                        As a high-level Python development framework, Django
                        helps you enable faster development of secure and
                        maintainable websites. With a knowledgeable Django
                        development team, we ensure smooth web development
                        without putting much effort on your end.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/web-app-development/nodejs-development">
              <a>
                <div className="col main_card_div text-center">
                  <div className="card card_main_page shadow">
                    <div className="svg-career-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/images/homeImage/gif/g/node.gif"
                        className="card-img-top"
                        alt="node"
                      />
                    </div>
                    <div className="card-body framework_text">
                      <h2 className="card-title">Node Js</h2>
                      <p className="card-text">
                        Build cross-platform, server-side, real-time connected
                        mobile apps. Our experts use Node.Js for efficient,
                        lightweight and data-intensive solutions.
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

export default WebAppDevelopment;
