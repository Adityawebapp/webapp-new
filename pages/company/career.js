/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import GetInTouch from '../../components/GetInTouch'


const Career = () => {
  return (
    <>
      <Head>
        <title>About Webapp | Software Development Company - Webapp UK </title>
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

      <section>
        <div className="career-page overflow-hidden">
          <div className="career-main">
            <div className="row">
              <div className="col-lg-6 col-sm-12 main_card_div-lg-6">
                <div className="left-career-content p-5">
                  <h1 className="mt-5">
                    <span className="bottom_Textline_center position-relative">
                      Career
                    </span>
                  </h1>
                  <div className="mt-5">
                    <p>
                      We are always looking to expand our team as well as our
                      pool of exceptional professionals available to our
                      clients. We are one of the best employers. Webapp creates
                      an atmosphere where you can develop your inner being, show
                      your talents and bring out the best in you. We believe in
                      inventing new processes that make your job easier. The
                      workplace in Webapp is very flexible. We are looking for
                      new talent who can add cultural values to Webapp, someone
                      who shares the same mission as ours but who can also bring
                      diversity to the table.
                    </p>
                    <p className="fw-bold py-4">
                      Let's grow together for a better future!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 main_card_div-lg-6">
                <div className="right-image">
                  <img className="img-fluid" src="/images/career/career.png" alt="career" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="career_card my-5">
            <div className="text-center">
              <h1 className="mb-3">
                <span className="mycolor">Perks To Work With </span>
                <span className="bottom_Textline_center position-relative text-black">
                  Webapp
                </span>
              </h1>
              <p className=" mb-5">
                We also recognise the importance of a healthy work-life balance
                and support our employees in their endeavours. We offer
                excellent facilities with innovative office buildings. These are
                some of the advantages you will enjoy when choosing us:
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <Image
                      width={80}
                      height={80}
                      src="/images/career/work_hours.png"
                      className="card-img-top"
                      alt="Flexible work hours"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Flexible work hours</h2>
                    <p className="card-text">
                      We are a work-oriented company where work is our priority.
                      According to our research, flexible work schedules are one
                      of the factors that reduce stress at work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <Image
                      width={80}
                      height={80}
                      src="/images/career/Work_Environment.png"
                      className="card-img-top"
                      alt="Work Environment"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Work Environment</h2>
                    <p className="card-text">
                      Our team is warm and welcoming to new hires. Webapp
                      includes activities focused on teaching, leading, healing
                      and understanding people.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <Image
                      width={80}
                      height={80}
                      src="/images/career/insurance_plan.png"
                      className="card-img-top"
                      alt="Insurance Plan"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Insurance Plan</h2>
                    <p className="card-text">
                      Knowing that you and your loved ones are covered in the
                      event of an accident or serious illness gives you peace of
                      mind, and it is priceless. Webapp ensures that all
                      employees have a good health insurance plan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <img
                      src="/images/career/growth.png"
                      className="card-img-top"
                      alt="Growth Opportunity"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Growth Opportunity</h2>
                    <p className="card-text">
                      Growth is never-ending at Webapp. Whether it's money,
                      skills and talents, or personal growth, it's all taken
                      care of. Growth at Webapp is immense so you don't need to
                      worry about your future at Webapp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <img
                      src="/images/career/bonus.png"
                  
                      className="card-img-top"
                      alt="Performance Bonus"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Performance Bonus</h2>
                    <p className="card-text">
                      Webapp values real talent and everyone gets their fair
                      share of pay, plus a great performance bonus that we think
                      we offer when we see our employees give more than 80%.
                      The hard work and dedication of the staff are never wasted
                      on Webapp. We believe in success, so there is no benchmark
                      for the right skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col main_card_div">
                <div className="card card_main_page shadow">
                  <div className="svg-career-icon">
                    <img
                     src="/images/career/workplace.png"
                      className="card-img-top"
                      alt="Workplace Celebrations"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">Workplace Celebrations</h2>
                    <p className="card-text">
                      Having fun is an integral part of Webapp. We celebrate
                      together, play together and work together at the same
                      time. We regularly organize fun activities in the office
                      to relieve your stress. And every festival is celebrated
                      with great vigour and enthusiasm on Webapp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Interview_process">
          <div className="container">
            <div className="career_card my-6">
              <div className="text-center Interview_process_heading ">
                <h1 className="m-0">
                  <span className="bottom_Textline_center position-relative text-dark m-0">
                    Interview Process
                  </span>
                </h1>
                <p className="mb-5 mt-2 fs-6 fw-lighter text-dark py-2">
                  The selection of a candidate depends solely on their
                  performance during the interview. In general, there are three
                  phases in the interview process, which are as follows:
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-5">
                <div className="col">
                  <div
                    className="card shadow position-relative"
                    style={{ height: "33rem" }}
                  >
                    <div className="">
                      <img  src="/images/career/HR.jpg" className="card-img-top" alt="HR ROUND" style={{borderRadius: "1.2rem"}} />
                    </div>
                    <div
                      className="text-start shadowcard position-absolute bottom-0 px-3"
                      style={{ height: "16rem" }}
                    >
                      <h3>01</h3>
                      <h5 className="py-2 fw-bold">HR ROUND</h5>
                      <p className="fs-6 fw-lighter">
                        In the first phase, a candidate would take a human
                        resources evaluation where they would be asked questions
                        about adaptability, leadership, growth potential, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow position-relative">
                    <div className="">
                      <img
                        src="/images/career/technical_round.png"
                        className="card-img-top"
                        alt="TECHNICAL ROUND"
                      />
                    </div>
                    <div
                      className="text-start shadowcard position-absolute bottom-0 px-3"
                      style={{ height: "16rem" }}
                    >
                      <h3>02</h3>
                      <h5 className="py-2 fw-bold">TECHNICAL ROUND</h5>
                      <p className="fs-6 fw-lighter">
                        The technical round will contain questions related to
                        the candidates domain. After the question-answer round,
                        the candidate will be performing a machine round which
                        will test the practical knowledge of the candidate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow position-relative">
                    <div className="">
                      <img
                        src="/images/career/final_round.png"
                        className="card-img-top"
                        alt="FINAL ROUND"
                      />
                    </div>
                    <div
                      className="text-start shadowcard position-absolute bottom-0 px-3"
                      style={{ height: "16rem" }}
                    >
                      <h3>03</h3>
                      <h5 className="py-2 fw-bold">FINAL ROUND</h5>
                      <p className="fs-6 fw-lighter">
                        This part of the interview is the last stage where the
                        candidate will be having a final discussion with the
                        Managing Director of the company and after the final
                        talks, the candidate will be given the result.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container current-opening-div mb-5">
          <div className="my-5 text-center current-text">
            <h2 className="fw-bolder bottom_line_currentText position-relative">
              Current <span>Openings</span>
            </h2>
          </div>
          <div className="currrent-opening">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">IOS Developer</h6>
                <p>Required experience – 2 to 3 Years</p>
              </div>
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">Position</h6>
                <p>2</p>
              </div>
              <div className="col-md-4 sendCV">
                <Link href="/company/careerForm">
                  <a>
                    <button className="btn px-5 border-0">Send CV</button>
                  </a>
                </Link>
                <img
                  width={30}
                  height={10}
                  src="../../images/career/Icon ionic-ios-arrow-round-forward@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="currrent-opening mt-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">Android Developer</h6>
                <p>Required experience – 2 to 3 Years</p>
              </div>
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">Position</h6>
                <p>2</p>
              </div>
              <div className="col-md-4 sendCV">
                <Link href="/company/careerForm">
                  <a>
                    <button className="btn px-5 border-0">Send CV</button>
                  </a>
                </Link>
                <img
                  width={30}
                  height={10}
                  src="../../images/career/Icon ionic-ios-arrow-round-forward@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="currrent-opening mt-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">Python Developer</h6>
                <p>Required experience – 2 to 3 Years</p>
              </div>
              <div className="col-md-4">
                <h6 className="fw-bolder fs-4">Position</h6>
                <p>2</p>
              </div>
              <div className="col-md-4 sendCV">
                <Link href="/company/careerForm">
                  <a>
                    <button className="btn px-5 border-0">Send CV</button>
                  </a>
                </Link>
                <img
                  width={30}
                  height={10}
                  src="../../images/career/Icon ionic-ios-arrow-round-forward@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch/>
    </>
  );
};

export default Career;
