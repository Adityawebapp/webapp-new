/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "./user-css/uiux.module.module.css";
import { BsCodeSlash, BsJournalCode, BsCode } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import Head from "next/head";
import IndustriesWeServe from "../../../components/IndustriesWeServe";
import ProcessWeFollow from "../../../components/ProcessWeFollow";
import GetInTouch from "../../../components/GetInTouch";

const UiuxDesign = () => {
  return (
    <>
      <Head>
        <title>UI and UX Design Services - Webapp UK</title>
        <meta
          name="description"
          content="We provide businesses with innovative UI/UX design services to enhance the digital experience and increase engagement."
        />
        <meta
          name="keywords"
          content="Ui & ux development services,
Ui/ux design software,
Ui/ux design,
Ui and ux Development"
        />

        <link
          rel="canonical"
          href="https://www.webapp.world/services/user-experience/uiux-design"
        />
      </Head>

      <div className="inner_page">
        <section className={styles.uiuxbg}>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <div className="top_text text-white">
                  <h1>Best UI/UX Design Services Company</h1>
                  <p>
                    Get insight on how we make our apps look amazing and trendy.
                    Tell your brand story through a visually stunning and
                    engaging UI design. As a leading UI/UX Design Software
                    company, we move beyond just the visual aspects of your
                    product and care more about the way people engage with
                    design to define their experience.
                  </p>

                  <div className="my_button">
                    <a>
                      <button className="close">Let`s Discuss Your Idea</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-5 header_img1">
                <img
                 
                  className="img-fluid"
                  src="/images/servies/pagesImage/mobile-ui.png"
                  alt="mobile-ui"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="card_section bg-gray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 header_img1 ">
                <img
                 
                  className="img-fluid"
                  src="/images/servies/pagesImage/Uiux design software.png"
                  alt="Uiux design software"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 right_text">
                <h1 className="mb-5">
                  <span className="mycolor">
                    Our Graphic Design Team Create Innovative UI and UX&nbsp;
                  </span>
                  <span className="bottom_Textline_center position-relative">
                    Designs
                  </span>
                </h1>
                <p>
                  At <b>Webapp</b>, we offer requisite solutions to our clients
                  and ensure that, at every stage of development, the end-user
                  remains our core consideration. We develop sophisticated
                  graphics and logo designs that bring ahead prominent user
                  interfaces and enrich the user experience. We offer a diverse
                  range of UI/UX development services to our global clients,
                  ensuring enhanced productivity and ROI.
                </p>

                <div className="my_button small_button mt-5">
                  <a>
                    <button className="close">Talk To Our Expert</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h1 className="text-center">
            <span className="bottom_Textline_center position-relative">
              Our UI/UX
            </span>
            <span className="mycolor"> Design Process</span>
          </h1>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 mt-5">
            <div className="col mb-4">
              <div className="card" style={{height: "27rem"}}>
                <div className="card-body shadow">
                  <div className="text-center py-3 development_card">
                    <Image
                      width="65px"
                      height="65px"
                      src="/images/icon/research.png"
                      alt="research"
                    />
                    <h2 className="card-title mb-3">Research</h2>
                    <p className=" ">
                      Our aim is to develop a strategy that supports both your
                      business goals and your users` needs. Once we learn who
                      your market is composed of, we set out to understand the
                      mental models - or explanations – of your potential users`
                      thought processes. After we accurately identify the
                      general mental model of your users, this insight will be
                      then passed on to our design team who will design
                      according to the model.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card " style={{height: "27rem"}}>
                <div className="card-body shadow">
                  <div className="text-center py-3 development_card">
                    <Image
                      width="65px"
                      height="65px"
                      src="/images/icon/wireframe.png"
                      alt="wireframe"
                    />
                    <h2 className="card-title mb-3">Wireframe</h2>
                    <p>
                      We wouldn`t be a good user experience design agency if we
                      didn`t wireframe before the designs were finalized.
                    </p>
                    <p>
                      Oftentimes when one is sketching out an app, they stumble
                      upon a function they can`t proceed from - a dead end.
                      Wireframing allows us to make sure the app functions and
                      flows well. A proper wireframe should look like a
                      completed maze.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card"style={{height: "27rem"}}>
                <div className="card-body shadow">
                  <div className="text-center py-3 development_card">
                    <Image
                      width="85px"
                      height="85px"
                      src="/images/icon/adobe-xd.png"
                      alt="adobe-xd"
                    />
                    <h2 className="card-title mb-3">Designing and Feel</h2>
                    <p className=" ">
                      Although wireframing makes sense of the app, it alone
                      won`t facilitate engagement. The app`s visual appeal is
                      what will leave a vivid impression on the user and form an
                      association with your brand, distinguishing it from
                      competitors. We employ user-centric design to encourage
                      predictability and magnetism. Here are some principles we
                      take into account during the user interface design
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="technology my-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                <div className="language_text text-center">
                  <h1 className=" ">
                    <span className="mycolor">
                      Leveraging The Best Tools to Offer UX/UI
                    </span>
                    <br />
                    <span className="bottom_Textline_center position-relative">
                      Design Solutions
                    </span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row row-cols-3 row-cols-lg-4 row-cols-md-3 langulage_card p-2 justify-content-center  langulage_card">
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/adobe-photoshop.png "
                        alt="adobe-photoshop"
                      />
                      <p className="card-text">Adobe Photoshop c</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/adobe-illustrator.png "
                        alt="adobe-illustrator"
                      />
                      <p className="card-text">Adobe illustrator</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/adobe-after-effects.png
                                "
                        alt="Adobe After Effects"
                      />
                      <p className="card-text">Adobe After Effects</p>
                    </div>
                  </div>
                  <div className="col language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/invision.png"
                        alt="inVISION"
                      />
                      <p className="card-text">inVISION</p>
                    </div>
                  </div>
                </div>

                <div className="row langulage_card">
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/sketch.png"
                        alt="sketch"
                      />
                      <p className="card-text">Sketch</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/figma.png"
                        alt="figma"
                      />
                      <p className="card-text">Figma</p>
                    </div>
                  </div>
                  <div className="col-4 language_grid">
                    <div className="language_body">
                      <Image
                        width="64px"
                        height="64px"
                        src="/images/icon/blender.png "
                        alt="Blender"
                      />
                      <p className="card-text">Blender</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="web-why-choose-us-inner bg-light py-5 bg-gray">
          <div className="container">
            <div className="text-center">
              <h1>
                <span className="mycolor">
                  
                  Results that Create an Impact Through
                </span>
                <br />
                <span className="bottom_Textline_center position-relative">
                  UX/UI Design
                </span>
              </h1>
            </div>
            <div className="m-height-170 mt-5">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="web-why-choose-us-inner-box mhbox shadow">
                    <div className="web-why-choose-inner-icon shadow">
                      <BsCodeSlash />
                    </div>
                    <h2>Turn vision into reality</h2>
                    <p>
                      Let your ideas come to life on our designing canvas as we
                      carve a thoughtful design out of your vision. We blend
                      technology and expertise in offering UX/UI design
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="web-why-choose-us-inner-box mhbox shadow">
                    <div className="web-why-choose-inner-icon shadow">
                      <BsJournalCode />
                    </div>
                    <h2>Holistic UX/UI Solutions</h2>
                    <p>
                      We go beyond simply designing the prototype and
                      elaborative UI, and instead emphasise providing
                      comprehensive business solutions through intuitive app
                      design.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="web-why-choose-us-inner-box mhbox shadow">
                    <div className="web-why-choose-inner-icon shadow">
                      <BsCode />
                    </div>
                    <h2>UX/UI Services at Par</h2>
                    <p>
                      The standards of our UI and UX development services are on
                      par with the industry when it comes to empowering your
                      business with the latest technology. Our experienced team
                      of graphic designers ensures scalable UI for a dynamic UX.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="web-why-choose-us-inner-box mhbox shadow">
                    <div className="web-why-choose-inner-icon shadow">
                      <BiCodeCurly />
                    </div>
                    <h2>Timeliness</h2>
                    <p>
                      Integrating timelines for delivery can determine business
                      success. Our commitment to timely delivery of UX/UI
                      services safeguards your business from competition to get
                      you to launch-ready in a jiffy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <IndustriesWeServe/>
      <ProcessWeFollow />
      <GetInTouch/>
    </>
  );
};

export default UiuxDesign;
