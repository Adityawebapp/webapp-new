import App from "next/app";
import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/About"), {
  ssr: false,
});

import CompanyProduct from "../components/CompanyProduct";

import GetInTouch from "../components/GetInTouch";

import HowToHelp from "../components/HowToHelp";

import IndustriesWeServe from "../components/IndustriesWeServe";

import MainHome from "../components/MainHome";

import ProcessWeFollow from "../components/ProcessWeFollow";

import ServicesWeOffer from "../components/ServicesWeOffer";

import WhyWebapp from "../components/WhyWebapp";

import Testimonial from "../components/Testimonial";

import MobileNav from "../components/MobileNav";

import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fevIcon.png" />

        <title>Software Development Company | Webapp UK </title>
        <meta
          name="description"
          content="Webapp is a leading and competitive software development company in the UK. We focus on designing, developing and delivering Custom software and mobile apps, websites, games & much more to our clients."
        />
        <meta
          name="keywords"
          content="Software Development Company, Custom Software development Company,Software Company,Development Company,Bespoke software, Hybrid app development services"
        />
      </Head>

      <MainHome />
      <CompanyProduct />
      <About />
      <ServicesWeOffer />
      <IndustriesWeServe />
      <WhyWebapp />
      <ProcessWeFollow />
      <HowToHelp />
      <GetInTouch />
      <Testimonial />
    </>
  );
}

export default Home;
