/* eslint-disable @next/next/no-img-element */
import React from "react";
// src="/images/homeImage/project-done/sharo@2x.png"
import Image from "next/image";

const CompanyProduct = () => {
  return (
    <>
      <section className="logoMarqueeSection">
        <div className="container" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
              <div className="marquee" style={{ animationDuration: "57s"}}>
                <a target="_blank">
                  <img
                    width={150}
                    height={150}
                    alt=""
                    src="/images/homeImage/project-done/sharo@2x.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={150}
                    height={80}
                    alt=""
                    src="/images/homeImage/project-done/envolondon.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={100}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/hurl.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={200}
                    height={120}
                    alt=""
                    src="/images/homeImage/project-done/invest.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={250}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/peng-ting.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={130}
                    height={120}
                    alt=""
                    src="/images/homeImage/project-done/sushiya.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={200}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/tjv.png"
                    className="marqueelogo"
                  />
                </a>
              </div>
              <div className="marquee" style={{ animationDuration: "57s" }}>
                <a target="_blank">
                  <img
                    width={150}
                    height={150}
                    alt=""
                    src="/images/homeImage/project-done/sharo@2x.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={180}
                    height={60}
                    alt=""
                    src="/images/homeImage/project-done/envolondon.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={100}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/hurl.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={200}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/invest.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={250}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/peng-ting.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                     width={130}
                    height={120}
                    alt="sushiya"
                    src="/images/homeImage/project-done/sushiya.png"
                    className="marqueelogo"
                  />
                </a>
                <a target="_blank">
                  <img
                    width={230}
                    height={100}
                    alt=""
                    src="/images/homeImage/project-done/tjv.png"
                    className="marqueelogo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProduct;
