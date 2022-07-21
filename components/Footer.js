/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Link from "next/link";
const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "formdata");

    axios
      .post("https://api.webapp.world/userMail",  data )
      .then((res) => {
        toast.success("mail submit successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <footer>
        <div className="container">
          <div className="contact_info">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-3 text-sm-center">
                <img
                  src="/images/logo_white.png "
                  alt=""
                  width="150"
                  className="mb-3"
                />
                <p className="slogan_text text-white">
                  Taking your business to the next level.
                </p>

                <div className="row  justify-content-center mt-4">
                  <div className="col-lg-2 col-md-2 col-sm-0 d-flex align-items-center">
                    <BsFillTelephoneForwardFill size={30} color="#ae0000" />
                  </div>
                  <div className="col-lg-8 col-md-8  col-sm-4">
                    <p className=" text-white mt-2">
                      <span className="ml-2 number"> 0800 001 6001 </span>
                    </p>
                    <p className=" text-white">
                      <span className="ml-2 number"> +91 120-4549471 </span>
                    </p>
                  </div>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col-lg-2 col-md-2  col-sm-0  d-flex align-items-center">
                    <HiMailOpen size={30} color="#ae0000" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-4">
                    <p className=" text-white m-0">
                      <span className="ml-2 number">projects@webapp.world</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2  mx-auto mb-sm-4 mb-lg-4 mt-lg-0 mt-md-0 mt-sm-5 text-white quick-link   text-sm-center text-lg-start text-md-start">
                <h6 className="text-uppercase fw-bold mb-4 ">
                  <span className="bottom_Textline_center position-relative">
                    Quick Links
                  </span>
                </h6>
                <ul className="list-unstyled list_link">
                  <li className="mb-2">
                    <Link href="/company/WhoWeAre">
                      <a>Who We Are? </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/company/career">
                      <a>Career </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/sitemap">
                      <a>Sitemap </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/projects">
                      <a>Projects </a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href="/sitemap">
                      <a>Sitemap</a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/privacy-policy">
                      <a>Privacy policy</a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-lg-2  mx-auto mb-4 text-white text-sm-center text-lg-start text-md-start">
                <h6 className="text-uppercase fw-bold mb-4 ">
                  <span className="bottom_Textline_center position-relative">
                    Services
                  </span>
                </h6>

                <li className="mb-2">
                  <Link href="/terms-conditions">
                    <a>Mobile Development </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms-conditions">
                    <a>Web Development</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms-conditions">
                    <a>Game Development</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms-conditions">
                    <a>Latest Technologies </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms-conditions">
                    <a>User Experience </a>
                  </Link>
                </li>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3  text-sm-center">
                <div className="row">
                  <div className="col-4 d-flex justify-content-center">
                    <div className="country_flag mb-3 d-flex align-items-center justify-content-center float-left ">
                      <img
                        width="30px"
                        src="/images/icon/london-bridge.png"
                        alt=""
                      />
                      <p className="text-white m-0">London</p>
                    </div>
                  </div>

                  <div className="col-8">
                    <div className="office_address">
                      <ul className="country_address text-start">
                        <li className="mb-2">
                          <p>20-22 Wenlock Rd,</p>
                        </li>
                        <li className="mb-2">
                          <p>London N1 7GU,</p>
                        </li>
                        <li className="mb-2">
                          <p>United Kingdom,</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row  mt-4">
                  <div className="col-4 d-flex justify-content-center">
                    <div className="country_flag mb-3 d-flex align-items-center justify-content-center float-left ">
                      <img width="30px" src="/images/icon/windsor.png" alt="" />
                      <p className="text-white m-0">Bracknell</p>
                    </div>
                  </div>

                  <div className="col-8">
                    <div className="office_address">
                      <ul className="country_address text-start">
                        <li className="mb-2">
                          <p>Venture House,</p>
                        </li>
                        <li className="mb-2">
                          <p> Downshire Way,</p>
                        </li>
                        <li className="mb-2">
                          <p>Arlington Square,</p>
                        </li>
                        <li className="mb-2">
                          <p>Bracknell RG12 1WA</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-4 d-flex justify-content-center">
                    <div className="country_flag mb-3 d-flex align-items-center justify-content-center float-left ">
                      <img
                        width="30px"
                        src="/images/icon/india-gate.svg"
                        alt=""
                      />
                      <p className="text-white m-0">India</p>
                    </div>
                  </div>

                  <div className="col-8">
                    <div className="office_address">
                      <ul className="country_address text-start">
                        <li className="mb-2">
                          <p>H160, BSI Tower,</p>
                        </li>
                        <li className="mb-2">
                          <p> Sector 63, Noida</p>
                        </li>
                        <li className="mb-2">
                          <p>India</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick_links_outer mt-5">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-sm-12 mx-auto mb-4 text-white">
                <p className="mb-2 text-white fw-100">
                  Stay connected with our latest insights
                </p>
                <div className="rounded border subscribe-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                    />

                    <button type="submit">
                      <FiSend size={30} color="#fff" />
                    </button>
                  </form>

                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>

              <div className="col-md-3 col-lg-4 d-flex  mx-auto mb-4 text-white footer_icon_badge">
                <div className="d-flex">
                  <img
                    style={{ marginRight: "3rem" }}
                    width="50%"
                    height="50%"
                    src="/images/footer/badge1.png"
                    alt="badge"
                  />
                  <img
                    width="50%"
                    height="50%"
                    src="/images/footer/appfutura-badge.png"
                    alt="fh"
                  />
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mx-auto mb-4 text-white">
                <div className="list-inline social-icons my-4 text-white desktop_social text-end">
                  <a
                    href="https://instagram.com/webapp.world?utm_medium=copy_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInstagram className="bi fa-instagram"  />
                  </a>
                  <a
                    href="https://www.facebook.com/Webapp.world/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="bi bi-facebook "  />
                  </a>
                  <a
                    href="https://twitter.com/WebappWorld"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter className="bi fa-twitter"  />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/webapp-world?trk=organization-update_share-update_actor-text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn  className="bi fa-linkedin-in"  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
