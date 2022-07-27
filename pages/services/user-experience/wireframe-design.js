/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "./user-css/wireframe.module.css";
import Head from "next/head";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";
import GetInTouch from "../../../components/GetInTouch";

const WireframeDesign = () => {
  return (
    <>
      <Head>
        <title>Wireframe Services -Webapp UK</title>
        <meta
          name="description"
          content="We offer the best wireframe web design prototyping services to boost up their business with fascinating results all across the globe."
        />
        <meta
          name="keywords"
          content="Website wireframes,
Wireframe website,
Wireframe app,
Wireframe for website,
Wireframe Design"
        />
        <link
          rel="canonical"
          href="https://www.webapp.world/services/user-experience/wireframe-design"
        />
      </Head>

      <div className="inner_page">
        <section className={styles.wireframebg}>
          <div className="container mt-5">
            <div className="row flex-reverse">
              <div className="col-md-6 col-sm-12 d-flex align-items-center text-white">
                <div className="top_text">
                  <h1>Wireframe/Prototype Development Company</h1>
                  <p className="my-3 text-white">
                    Give your ideas a visual representation with our elegant
                    wireframes and prototypes. Prototyping is a powerful
                    technique in digital application design for both customers
                    and development teams. Wireframe designs are visual
                    representations of the page structure and layout,
                    illustrating the structural arrangement of different
                    components on the page and the relationships between those
                    components.
                  </p>

                  <p className="my-3 text-white">
                    At <b>Webapp</b>, our team creates wireframes & prototypes
                    using tools and techniques. It means we create and test
                    wireframes fast to validate the direction before we work out
                    all the details, which takes time and effort. Our preferred
                    way of doing this is through collaboration with end-users
                    and our customers. We help businesses navigate any and all
                    facets of the Wireframe Design Service, digital landscape,
                    assisting with wire-framing and interactive prototyping,
                    creating experiences that deliver tangible business results.
                  </p>

                  <div className="my_button">
                    <a>
                      <button className="close">Let`s Discuss Your Idea</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <Image
                  width={600}
                  height={600}
                  className="img-fluid"
                  src="/images/servies/pagesImage/Website-wireframes.png"
                  alt="Website-wireframes"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="py-5 bg-gray">
          <div className="container">
            <div className="row align-items-center" data-aos="fade-right">
              <div className="col-lg-6 col-sm-12  header_img1">
                <img
                 
                  width="90%"
                  src="/images/servies/pagesImage/Wireframe-Design.png"
                  alt="Wireframe-Design"
                />
              </div>
              <div
                className="col-md-6 col-sm-12 right_text "
                data-aos="fade-left"
              >
                <h1 className="mb-5">
                  <span className="mycolor">
                    {" "}
                    Wireframing and Prototyping Services for Better
                  </span>
                  <span className="bottom_Textline_center position-relative">
                    {" "}
                    Conceptualisation
                  </span>
                </h1>
                <p>
                  <b>Webapp</b> is a premier wireframe and prototype design
                  company. Wireframing and prototyping are essential steps to
                  getting an idea about information flow and architecture in the
                  early stages of a product’s lifecycle. We provide wireframes
                  and prototype design services based on individual client
                  project requirements. By doing this, we create a visual
                  representation of the clients’ requirements, enhance
                  creativity, and reduce significant project costs for future
                  phases.
                </p>

                <div className="my_button">
                  <a>
                    <button className="close">Talk To Our Expert</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card_section py-6">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 col-sm-12 right_text "
                data-aos="fade-right"
              >
                <h1 className="mb-5 ">
                  <span className="mycolor">Wireframes</span>{" "}
                  <span className="bottom_Textline_center position-relative">
                    {" "}
                    Essential
                  </span>
                </h1>
                <p>
                  Wireframes for websites are incredibly important. Wireframing
                  allows us to lay out user interface elements in such a way to
                  ensure proper functionality within the app, and also
                  guarantees the app flows smoothly.
                </p>
              </div>
              <div className="col-md-6 col-sm-12" data-aos="fade-left">
                <Image
                  width={600}
                  height={700}
                  className="img-fluid"
                  src="/images/servies/pagesImage/Wireframe-for-website.png"
                  alt="Wireframe-for-website"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <IndustriesWeServe/>
      <ProcessWeFollow />
      <GetInTouch/>
    </>
  );
};

export default WireframeDesign;
