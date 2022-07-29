/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { FaBars  } from "react-icons/fa";
import {  MdNavigateNext } from "react-icons/md";
import {  AiOutlineClose } from "react-icons/ai";
import Script from "next/script";
const MobileNav = () => {

  return (
    <>
      <Script id="show-banner" strategy="lazyOnload">
        {`
        
        var $menuTrigger = $(".js-menuToggle");
var $topNav = $(".js-topPushNav");
var $openLevel = $(".js-openLevel");
var $closeLevel = $(".js-closeLevel");
var $closeLevelTop = $(".js-closeLevelTop");
var $navLevel = $(".js-pushNavLevel");



function openPushNav() {
  $topNav.addClass("isOpen");


  
}

function closePushNav() {
  $topNav.removeClass("isOpen");
  $openLevel.siblings().removeClass("isOpen");
  {/* $("body").removeClass("pushNavIsOpen"); */}
  $("html").removeAttr("style");

}

$menuTrigger.on("click touchstart", function (e) {
  e.preventDefault();
  if ($topNav.hasClass("isOpen")) {
    closePushNav();
  } else {
    openPushNav();
  }
});

$openLevel.on("click touchstart", function () {
  $(this).next(".js-pushNavLevel").addClass("isOpen");
});

$closeLevel.on("click touchstart", function () {
  $(this).closest($navLevel).removeClass("isOpen");
});

$closeLevelTop.on("click touchstart", function () {
  closePushNav();
});

$("").click(function () {
  closePushNav();
});



        
        `}
      </Script>


      
      <style jsx>
        {`

      @media screen and (max-width: 600px) {
  .pushNav {
    width: 75%;
    right: -75%;
  }
}
@media screen and (min-width: 601px) {
  .pushNav {
    width: 350px;
    right: -350px;
  }
}
ul.pushNav {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.pushNav {
  height: 100%;
  position: fixed;
  top: 0;
  overflow: hidden;
  background: #2e2f35;
  transition: ease-in-out 0.5s;
}

.pushNav hr {
  border: 1px solid #555;
}

.pushNav,
.pushNav a {
  font-size: 1rem;
  font-family: helvetica, sens-serif;
  font-weight: 100;
  color: #fff;
  text-decoration: none;
}



.js-topPushNav.isOpen,
.pushNav_level.isOpen {
  right: 0;
  z-index: 99999999999;
}

.closeLevel,
.openLevel {
  cursor: pointer;
}

.openLevel,
.closeLevel,
.pushNav a {
  padding: 1em 1em;
  display: block;
  text-indent: 5px;
  transition: background 0.4s ease-in-out;
}
.openLevel:hover,
.closeLevel:hover,
.pushNav a:hover {
  background: #494a50;
}

.openLevel span {
  padding: 0 1rem;
}

.hdg {
  background-color: #1e1e24;
}

.closeLevel,
closelevel > i {
  font-size: 1em;
  color: #a5a5a4;
}

.burger {
  overflow: hidden;
  text-align: end;
  cursor: pointer;
  transition: top 0.3s;
}

.burger i {
  font-size: 2.5em;
  color: #ae0000;
}

.screen {
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.pushNavIsOpen .screen {
  height: 100%;
  opacity: 1;
}

.fa {
  display: inline;
  padding: 20px;
  font-size: 10px;
}



.wrapper {
  color: #fff;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-weight: 100;
  font-size: 1.1em;
  line-height: 1.4em;
  background-color: #000 !important;
  padding:10px;
}


.wrapper a {
  color: #20c270;
  text-decoration: none;
}
.wrapper button {
  background-color: #20c270;
  margin: 50px auto;
  display: block;
  padding: 10px 40px;
  border: none;
}
.wrapper button:hover {
  background-color: #18a960;
}
.wrapper button a {
  color: #fff;
  font-size: 2em;
}

@media (max-width: 575.98px) {
  .burger {
    padding: 5px 20px;
    /* position: absolute; */
    overflow: hidden;
    /* background-color: #333; */
    /* position: fixed; */
    top: 0;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .burger {
    display: block;
  }
  .mobile_mumber_header {
    display: block !important;
  }
}

@media (min-width: 1199.98px) {
  .burger {
    display: none !important;
  }
  .mobile_mumber_header {
    display: none !important;
  }

  .mobile-image-hide {
    display: none;
  }
  .wrapper {
    display: none !important;
  }
}


.fixNav {
  position: fixed;
  top: 0;
  padding: 0px 31px;
  background-color: white;
  transition: 0.5s all;
}




.quote_btn {
  position: relative;
  letter-spacing: 2px;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: 0.5s;
  border: 2px solid #ae0000;
  border-radius: 30px;
  overflow: hidden;
  padding: 10px 24px !important;
  font-size: 1rem !important;
  width: 70%;
  margin: 16px;
}

.quote_btn:hover {
  background: #ffffff url(https://i.postimg.cc/wBXGXbWN/pixel.png);
  color: white !important;
  transition-delay: 0.1s;
  background-size: 180px;
  -webkit-animation: animate 0.5s steps(8) forwards;
  animation: animate 0.1s steps(8) forwards;
}

@-webkit-keyframes animate {
  0% {
    background-position-y: 0;
  }

  100% {
    background-position-y: -480px;
  }
}

@keyframes animate {
  0% {
    background-position-y: 0;
  }

  100% {
    background-position-y: -480px;
  }
}

.quote_btn:after {
  content: "";
  top: 0;
  transform: translateX(100%);
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  animation: slide 2s infinite;
  background: linear-gradient(
    to right,
    rgba(64, 235, 241, 0) 0%,
    rgb(226 136 136 / 80%) 50%,
    rgba(64, 235, 241, 0) 99%,
    rgba(64, 235, 241, 0) 100%
  );
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

    `}
      </style>

      <div className="fixed-top bg-white mb-5">
        <div className="mobile_mumber_header">
          <div className="d-flex justify-content-center">
            <img src="" alt="" />
            <div className="d-flex align-items-center">
              <img width="40px" src="/images/icon/uk_logo.png" alt="" />
              <a href="tel:08000016001">0800 0016001</a>
            </div>
            <div className="d-flex align-items-center">
              <img width="40px" src="/images/icon/indialogo.png" alt="" />

              <a href="tel:+91120-4549471">+91 120-4549471</a>
            </div>
          </div>
        </div>

        <nav>
          <ul className="pushNav js-topPushNav" id="js-topPushNav">
            <li className="closeLevel js-closeLevelTop hdg">
              {/* <i className="bi bi-x-circle"></i> */}
              <AiOutlineClose size={25} color="#ae0000"/>
            </li>

            <div className="mobileNav_Home">
              <li>
                <a>Home</a>
              </li>

              <li>
                <div className="openLevel js-openLevel">
                  Company
                  <i className="fa fa-chevron-right"></i>
                </div>
                <ul className="pushNav pushNav_level js-pushNavLevel">
                  <li className="closeLevel js-closeLevel hdg">
                    {/* <i className="fa fa-chevron-left"></i> */}
                    <MdNavigateNext/>
                    Back
                  </li>
                  <li>
                    <Link href="/company/about">
                      <a> Who We Are?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/career">
                      <a> Career </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="openLevel js-openLevel">
                  Services
                  {/* <i className="fa fa-chevron-right"></i> */}
                  <MdNavigateNext/>
                </div>

                <ul className="pushNav pushNav_level js-pushNavLevel">
                  <li className="closeLevel js-closeLevel hdg">
                    <i className="fa fa-chevron-left"></i>
                    Back
                  </li>

                  <li>
                    <div className="openLevel js-openLevel">
                      Mobile App Development
                      <i className="fa fa-chevron-right"></i>
                    </div>
                    <ul className="pushNav pushNav_level js-pushNavLevel">
                      <li className="closeLevel js-closeLevel hdg">
                        <i className="fa fa-chevron-left"></i>
                        Back
                      </li>
                      <li className="closetab">
                        <Link href="/services/mobile-app-development">
                          <a>Mobile App Development</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/mobile-app-development/IOS-app-development">
                          <a>iPhone App Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-app-development/Android-application">
                          <a>Android App Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-app-development/Flutter-app-development">
                          <a>Flutter App Development</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="openLevel js-openLevel">
                      Web Development
                      {/* <i className="fa fa-chevron-right"></i> */}
                      <MdNavigateNext/>
                    </div>
                    <ul className="pushNav pushNav_level js-pushNavLevel">
                      <li className="closeLevel js-closeLevel hdg">
                        <i className="fa fa-chevron-left"></i>
                        Back
                      </li>
                      <li className="closetab">
                        <Link href="/services/web-app-development">
                          <a>Web Development</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/web-app-development/ReactJS-development">
                          <a>ReactJs Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-app-development/Angular-development">
                          <a>Angular Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/web-app-development/php-development">
                          <a>PHP Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-app-development/laravel-development">
                          <a>Laravel Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-app-development/NodeJS-development">
                          <a>NodeJs Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-app-development/Python-Django-development">
                          <a>Django/Python Development</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="openLevel js-openLevel">
                      Game Development
                      {/* <i className="fa fa-chevron-right"></i> */}
                      <MdNavigateNext/>
                    </div>
                    <ul className="pushNav pushNav_level js-pushNavLevel">
                      <li className="closeLevel js-closeLevel hdg">
                        <i className="fa fa-chevron-left"></i>
                        Back
                      </li>
                      <li className="closetab">
                        <a href="/services/game-app-development">
                          Game Development
                        </a>
                      </li>

                      <li>
                        <a href="/services/game-app-development/IOS-game-development">
                          IOS Game Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/game-app-development/Android-game-development">
                          Android Game Development
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="openLevel js-openLevel">
                      User Experience
                      {/* <i className="fa fa-chevron-right"></i> */}
                      <MdNavigateNext/>
                    </div>
                    <ul className="pushNav pushNav_level js-pushNavLevel">
                      <li className="closeLevel js-closeLevel hdg">
                        <i className="fa fa-chevron-left"></i>
                        Back
                      </li>
                      <li>
                        <Link href="/services/user-experience">
                          <a>User Experience </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/services/user-experience/wireframe-design">
                          <a>Wireframe</a>
                        </Link>
                      </li>
                      <li>
                        <a href="/services/user-experience/ui-ux-design">
                          UI/UX Design
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="openLevel js-openLevel">
                      Latest Technologies
                      {/* <i className="fa fa-chevron-right"></i> */}
                      <MdNavigateNext/>
                    </div>
                    <ul className="pushNav pushNav_level js-pushNavLevel">
                      <li className="closeLevel js-closeLevel hdg">
                        <i className="fa fa-chevron-left"></i>
                        Back
                      </li>
                      <li className="closetab">
                        <Link href="/latest-app-trends">
                          <a>Latest Technologies </a>
                        </Link>
                      </li>
                      <li className="closetab">
                        <Link href="/services/latest-app-trends/IOT-development">
                          <a>IOT</a>
                        </Link>
                      </li>
                      <li className="closetab">
                        <Link href="/services/latest-app-trends/Blockchain-development">
                          <a>Blockchain</a>
                        </Link>
                      </li>
                      <li className="closetab">
                        <Link href="/services/latest-app-trends/augmented-virtual-Reality">
                          <a>AR/VR </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/project">
                  <a>
                    <div>Projects</div>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <a>
                    <div>Contact</div>
                  </a>
                </Link>
              </li>

              <li className="">
                <Link href="/get-quote">
                  <a className="nav-link quote_btn">Get Quote</a>
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        <div className="wrapper">
          <div className="row align-items-center">
            <div className="col-6 text-center mobile-image-hide">
              <a>
                <img width="65%" src="/images/logo.png" alt="asfds" />
              </a>
            </div>
            <div className="col-6">
              <div className="burger js-menuToggle" id="burger">
                {/* <i className="bi bi-list"></i> */}
                <FaBars size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
