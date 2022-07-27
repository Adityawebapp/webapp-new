/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import OurTeam from "/Helper/Team";
import Head from "next/head";
import { BsArrowRightCircle } from "react-icons/bs";

const WhoWeAre = () => {
  var whoweAre = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        whoweAre: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        whoweAre: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        whoweAre: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Career | Open Positions - Webapp UK</title>
        <meta
          name="description"
          content="
Webapp is one of the top trusted Software development company in the UK which is all about a team of young and experienced developers."
        />
        <meta
          name="keywords"
          content="Custom software development,Software development company,Software development company in UK,Mobile app development Comapny"
        />
      </Head>

      <div className="about-page">
        <div className="text-center about_text col-lg-8">
          <h1>ABOUT WEBAPP</h1>

          <p className="mt-4">
            Webapp is a pioneer in software development with our dedicated
            offering of mobile app development for iOS and Android, website
            development, game development and digital marketing related
            solutions. Webapp is a fast-growing custom software development
            company specializing in website and mobile app design and
            development. We focus on the conception, design, programming and
            execution of your applications, as well as the testing and
            troubleshooting associated with the creation and maintenance of
            software components. Develop and update your applications with
            Webapp in the UK!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="career_card my-5">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col main_card_div">
              <div className="card card_main_page shadow">
                <div className="svg-career-icon">
                  <Image
                    width="80"
                    height="80"
                    src="/images/about/aboutGIF/overVision.svg"
                    className="card-img-top"
                    alt="overVision"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">OUR VISION</h2>
                  <p className="card-text">
                    We will be the most valued business partner of all our
                    customers. Becoming one of the leading bespoke software
                    development companies in the industry to work with.
                  </p>
                </div>
              </div>
            </div>
            <div className="col main_card_div">
              <div className="card card_main_page shadow">
                <div className="svg-career-icon">
                  <Image
                    width="80"
                    height="80"
                    src="/images/about/aboutGIF/ourMisson.png"
                    className="card-img-top"
                    alt="ourMisson"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">OUR MISSION</h2>
                  <p className="card-text">
                    Our mission at Webapp is to create incredible platforms for
                    businesses to achieve their greatness as a company. We
                    consider it a privilege to be able to help. As technology
                    continues to evolve our commitment will always be the same
                    and the mission is to work on becoming the custom software
                    development company in the UK.
                  </p>
                </div>
              </div>
            </div>
            <div className="col main_card_div">
              <div className="card card_main_page shadow">
                <div className="svg-career-icon">
                  <Image
                    width="80"
                    height="80"
                    src="/images/about/aboutGIF/ourCoreValue.svg"
                    className="card-img-top"
                    alt="ourCoreValue"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">OUR CORE VALUES</h2>
                  <p className="card-text">
                    Our team is experienced with all leading technology
                    platforms and can offer you a wide range of services. The
                    team at Webapp is made up of young and creative individuals
                    who work in a supportive, friendly and dynamic environment.
                    Our attention to detail extends to every single line of code
                    in a project. Our knowledge of building software products
                    will allow us to adjust to your goals as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about_main">
        <div className="container py-5">
          <div className="who_we_are text-center">
            <h2 className="mb-5 fw-bold"> <span className="bottom_Textline_center position-relative "> Who we are</span>    </h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>
                Webapp is a renowned web application company designed to make
                businesses more accessible in the digital world. Our
                award-winning bespoke software development service simply cannot
                be duplicated by solutions. We pride ourselves on our innovative
                technology, our understanding of the digital age, and our
                passion for what we do. Our services include the creation of
                mobile applications, web applications and websites, the
                implementation of blockchain technologies, the implementation of
                IT consulting and the outsourcing of IT work. From start to
                finish, we create beautiful and functional digital products and
                take care of product design, documentation and implementation,
                as well as front-end and back-end management. Our regular
                customers include companies from all over the world and we
                regularly offer complex integrations, web applications and
                websites for your business needs. Whatever work we do, we take
                the time to fully understand your business goals. The foundation
                of the web application is based on several core values that
                guarantee the consistency and quality of our work. Through
                innovative technology, these values allow us to have a real
                impact on the companies we work for.
              </p>

              <p>
                Webapp offers mobile app development and custom software
                development services for small, medium and large businesses. We
                have an experienced and innovative software development team
                that can help you increase your overall efficiency. Our team is
                made up of highly-skilled, young and enthusiastic IT
                professionals who aim to deliver first-className, cost-effective
                solutions to industry in the UK. We have experience designing
                and developing bespoke websites and apps for all industries. So
                if there is a specific requirement, we will fulfil it by
                customizing the app as per your needs. We strive to provide
                admirable service with the support of our dedicated team of
                developers, designers, and testers. First of all, we understand
                the needs of our clients and then we start working on them. We
                offer different types of services, such as Website Development,
                Mobile Application Development, Digital Marketing, User
                Experience Design, and Custom Game Development.
              </p>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center  ">
              <img
                width="80%"
                height="atuo"
                src="/images/about/who_we_are.png"
                alt="software development companies uk"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="leadership_section">
        <div className="container">
          <div className="career_card my-5">
            <div className="text-center top_text my-5 Leadership_heading">
              <h1>
                <span className="bottom_Textline_center  position-relative  ">
                  LEADERSHIP
                </span>
              </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
              <div className="col">
                <div className="leadership_section_bgcolor">
                  <div className="card shadow position-relative">
                    <div className="">
                      <img
                      
                        src="/images/servies/pagesImage/dheeraj.png"
                        className="card-img-top"
                        alt="Dheeraj Chauhan"
                      />
                    </div>
                    <div className="shadowcard position-absolute bottom-0">
                      <h5 className="py-2 fw-bold">Dheeraj Chauhan</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="leadership_section_bgcolor">
                  <div className="card shadow position-relative">
                    <div className="">
                      <img
                       className="img-fluid"
                        src="/images/servies/pagesImage/upender.png"
                 
                        alt="Upender Rawat"
                      />
                    </div>
                    <div className="shadowcard position-absolute bottom-0">
                      <h5 className="py-2 fw-bold">Upender Rawat</h5>
                      <p>Product Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourTeam">
        <div className="ourTeam_heading">
          <h1 className="text-center py-5">
            <span className="bottom_Textline_center  position-relative ">
              OUR TEAM
            </span>
          </h1>
        </div>

        <div className="container bg_shapAdd">
          <div className="">
            <div className="teamSlider">
              <div className="card shadow overflow-hidden">
                <Slider {...whoweAre}>
                  {OurTeam.map((e, index) => {
                    console.log(e.image);
                    return (
                      <>
                        <div key={index}>
                          <img
                            src={e.image}
                            alt="team"
                            className="img-fluid"
                          />

                          <div className="text-center shadowcard">
                            <h5 className="fw-bold" style={{fontSize:"18px"}}>{e.name}</h5>
                            <p>{e.work}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>

 
        </div>
      </div>
      <div className="join_us">
        <div className="container py-5">
          <div className="text-center">
            <h3 className="text-capitalize">
              We are open to expanding our team of young and enthusiastic
              people.
            </h3>
            <div className="join_us_button my-4">
              <button type="button" className="btn px-4 ">
                <BsArrowRightCircle className="mb-1" />
                <span> Join Us </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
