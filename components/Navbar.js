import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { RiFlutterFill, RiReactjsFill, RiAngularjsFill } from "react-icons/ri";
import {
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFigma,
  SiAdobexd,
  SiPrivateinternetaccess,
  SiBlockchaindotcom,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import TopNavbar from "./TopNavbar";
import { BsFillPeopleFill,BsCurrencyBitcoin } from "react-icons/bs";
import { MdEmojiPeople } from "react-icons/md";
import { IoThunderstormOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
  <style global jsx>{`
  .dropdown:hover .dropdown-menu{
        display: block;
    }
    .dropdown-menu{
        margin-top: 0;
    }
      `}</style>

<Script id="show-banner" strategy="lazyOnload">
  {`
  
  $(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     
  `}
</Script>


      <motion.nav
        className="navbar navbar-expand-lg bg-dark p-2"
        id="desktopNavbar"
        initial={{ y: "0", opacity: 0 }}
        animate={{ y: "-20", opacity: 1, delay: 20 }}
      >
        <div className="container ">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                width={150}
                height={40}
                src="/images/logo.png"
                alt="webpp logo"
              />
            </a>
          </Link>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item my-1 dropdown text-white">
                <motion.a
                  whileHover={{ originX: 0, scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className="nav-link dropdown-toggle  mx-2"
                  id="companyId"
                  role="button"
                  data-bs-toggle="dropdownt"
                  aria-expanded="false"
                >
                  Company
                </motion.a>
                <ul
                style={{borderRadius: "10px"}}
                  className="dropdown-menu"
                  aria-labelledby="companyId"
                >
                  <li>
                    <Link href="/company/WhoWeAre" >

                      <mkota className="dropdown-item pointer">
                     <BsFillPeopleFill size={20} style={{marginRight:"15px"}} className="mb-1 mr-3" /> <span style={{fontSize:"14px"}}> Who We Are?  </span>  
                      </mkota>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/career">
                      <a className="dropdown-item mr-5"> <MdEmojiPeople style={{marginRight:"15px"}} size={20}/>  <span style={{fontSize:"14px"}}>Career</span>  </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item my-1 dropdown has-megamenu text-white " >
                <motion.a
                  whileHover={{ originX: 0, scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  href="#"
                  className="nav-link dropdown-toggle "
                 
                  // data-bs-toggle="dropdown"
                >
                  Services
                </motion.a>
                <div className="dropdown-menu megamenu "  style={{ top: "initial!important",borderRadius: "10px"}} role="menu" >
                  <div className="row">
                    <div className="col mb-4">
                      <div className="row">
                        <Link href="/services/mobile-app-development/mobile-app-development">
                          <a className="hoverNone pointer"
                          >
                            <div className="service_heading_nav d-flex justify-content-start align-items-center">
                              <Image
                                width="40px"
                                height="40px"
                                src="/images/clients/app-development.png"
                                alt=""
                              />
                              <h6 className="font-weight-bold text-uppercase d-flex mx-3 fs-15">
                                Mobile App <br />
                                Development
                              </h6>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <hr className="nav_line m-1" />
                      <ul className="list-unstyled ">
                        <li className="nav-item my-1">
                          <Link href="/services/mobile-app-development/ios-app-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                originX: 0,
                                scale: 1.1,
                              }}
                              transition={{ type: "spring", stifness: 900 }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillApple fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  IOS App Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/mobile-app-development/android-app-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillAndroid fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Android App Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1 center-image-nav">
                          <Link href="/services/mobile-app-development/flutter-app-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiFlutterFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Flutter App Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/services/web-app-development/web-development">
                        <a className="hoverNone">
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/browser-web-design-svgrepo-com.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3 fs-15">
                              Web <br />
                              Development
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line m-1" />
                      <ul className="list-unstyled ">
                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/reactjs-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiReactjsFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  ReactJs Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>

                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/angular-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiAngularjsFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Angular Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/php-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiPhp fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  PHP Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/laravel-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiLaravel fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Laravel Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/nodejs-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <FaNodeJs fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  NodeJs Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/web-app-development/django-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiDjango fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Django/Python Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/services/game-app-development/game-app-development">
                        <a className="hoverNone">
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/game-development.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3 fs-15">
                              Game <br />
                              Development
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line m-1" />
                      <ul className="list-unstyled ">
                        <li className="nav-item my-1">
                          <Link href="/services/game-app-development/ios-game-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillApple fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  IOS Game <br /> Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/game-app-development/android-game-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillAndroid fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Android Game Development
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/services/user-experience/user-experience">
                        <a className="hoverNone">
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/Concept-design.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3 fs-15">
                              User <br />
                              Experience
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line m-1" />
                      <ul className="list-unstyled ">
                        <li className="nav-item my-1">
                          <Link href="/services/user-experience/wireframe-design">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiFigma fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">Wireframe</p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1 center-image-nav">
                          <Link href="/services/user-experience/uiux-design">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiAdobexd fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  UI/UX Design
                                </p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4" style={{overflow: 'hidden'}}>
                      <Link href="/services/latest-app-trends/latest-app-trends">
                        <a className="hoverNone">
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/latest tech.png"
                              alt=""
                            />
                            <h6 className="text-uppercase d-flex mx-2 fs-15">
                              Latest <br />
                              Technologies
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line m-1" />
                      <ul className="list-unstyled ">
                        <li className="nav-item my-1">
                          <Link href="/services/latest-app-trends/iot-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <IoThunderstormOutline fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-items-center">
                                <p className="fs-6 text-dark m-0">IOT</p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/latest-app-trends/blockchain-development">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <BsCurrencyBitcoin fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-items-start">
                                <p className="fs-6 text-dark m-0">Blockchain</p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                        <li className="nav-item my-1">
                          <Link href="/services/latest-app-trends/augmented-virtual-reality">
                            <motion.a
                              whileHover={{
                                originX: 0,
                                scale: 1.1,
                                
                              }}
                              className="nav-link text-small pb-0 d-flex align-items-center pointer"
                            >
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <GiArtificialHive fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-items-start">
                                <p className="fs-6 text-dark m-0">AR/VR</p>
                              </span>
                            </motion.a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item my-1 text-white  mx-2 ">
                <Link href="/projects">
                  <motion.a
                    whileHover={{ originX: 0, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="nav-link pointer"
                  >
                    Projects
                  </motion.a>
                </Link>
              </li>

              <li className="nav-item my-1 text-white  mx-2 ">
                <Link href="/contact" activeStyle={{color: "red"}}>
                  <motion.a
                    whileHover={{ originX: 0, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="nav-link pointer"
 
                  >
                    Contact
                  </motion.a>
                </Link>
              </li>

              <li className="nav-item my-1 text-white  mx-2 ">
                <Link href="/quote">
                  <a className="nav-link pointer quote_btn"
              
                  >
                    Get Quote
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* mobile navbar  */}

      <div className="mobile-navbar">
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;
