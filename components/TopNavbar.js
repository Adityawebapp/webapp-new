/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { HiMail } from "react-icons/hi";
import styles from "../styles/css/TopNavbar.module.css";

const TopNavbar = () => {
  return (
    <>
      <div className={styles.TopNavbarr}>
        <div className="d-flex align-items-center bg-muted">
          <div className="container d-flex justify-content-lg-end justify-content-sm-center">
            <div className="contact-info d-flex align-items-center">
              <div className={styles.mobileNumber}>
                <div className=" d-flex align-items-center mx-3">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icon/uk_logo.png"
                    alt="uk"
                  />
                  <span className="fs-6">0800 0016001</span>
                </div>
              </div>
              <div className={styles.mobileNumber}>
                <div className="mobileNumber d-flex align-items-center mx-3">
                  <Image
                    width={38}
                    height={35}
                    src="/images/icon/indialogo.png"
                    alt="indialogo"
                  />
                  <span className="fs-6">+91 120-4549471</span>
                </div>
              </div>
              <div className={styles.MobileEmailnon}>
                <div className="d-flex align-items-center mx-3">
                  <HiMail size={30} color="#ae0000" className="mx-2" />
                  <a className="pl-4 fs-6" href="mailto:contact@example.com">
                    info@webapp.world
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
