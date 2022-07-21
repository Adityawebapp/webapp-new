import Link from "next/link";
import React from "react";

const Sitemap = () => {
  return (
    <>
    <style jsx>{`
        li {
          list-style: disc;
          margin:1rem 0;
          color: #727272;
        }
        h2 a{
            font-size: 1.5rem;
            font-weight: bold;
        }
     
      `}</style>
      <div className="container mb-5">
        <div className="text-center">
          <h1 className="my-5">
            <span className="bottom_Textline_center position-relative "> </span>
            SITEMAP
          </h1>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <h2>
              <Link href="/">
                <a> Home </a>
              </Link>
            </h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Projects </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Get Quote</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h2>
              <Link href="/">
                <a>Mobile App Development</a>
              </Link>
            </h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Iphone App Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Android App Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Flutter App Development</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h2>
              <Link href="/">
                <a> Web Development </a>
              </Link>
            </h2>
            <ul>
              <li>
                <Link href="/">
                  <a>ReactJS Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Angular Development</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>PHP Developmen</a>
                </Link>
              </li>
              <li>
                <a>Laravel Development</a>
              </li>
              <li>
                <Link href="/">
                  <a>NodeJS Developmen</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Django/Python Developmen</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h2>
              <a> Game Development </a>
            </h2>
            <ul>
              <li>
                <a>IOS Game Development</a>
              </li>
              <li>
                <a>Android Game Development</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h2>
              <a>User Experience </a>
            </h2>
            <ul>
              <li>
                <a>Wireframe</a>
              </li>
              <li>
                <a> UI/UX Design </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h2>
              <a> Latest Technologies </a>
            </h2>
            <ul>
              <li>
                <a> IOT </a>
              </li>
              <li>
                <a Blockchain>Blockchain</a>
              </li>
              <li>
                <a>AR/VR</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <h2>Quick Links</h2>

            <ul>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <app-footer></app-footer>
    </>
  );
};

export default Sitemap;
