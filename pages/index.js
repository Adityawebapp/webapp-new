import App from "next/app";
import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import('../components/About'), {
  ssr: false,
})

// import About from "../components/About";
// import CompanyProduct from "../components/CompanyProduct";

const CompanyProduct = dynamic(() => import('../components/CompanyProduct'), {
  ssr: false,
})



// import Footer from "../components/footer";
// import GetInTouch from "../components/GetInTouch";
const GetInTouch = dynamic(() => import('../components/GetInTouch'), {
  ssr: false,
})
// import HowToHelp from "../components/HowToHelp";
const HowToHelp = dynamic(() => import('../components/HowToHelp'), {
  ssr: false,
})

// import IndustriesWeServe from "../components/IndustriesWeServe";
const IndustriesWeServe = dynamic(() => import('../components/IndustriesWeServe'), {
  ssr: false,
})

// import MainHome from "../components/MainHome";
const MainHome = dynamic(() => import('../components/MainHome'), {
  ssr: false,
})

// import TopNavbar from "../components/TopNavbar";
const TopNavbar = dynamic(() => import('../components/TopNavbar'), {
  ssr: false,
})

// import Navbar from "../components/Navbar";
const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})

// import ProcessWeFollow from "../components/ProcessWeFollow";
const ProcessWeFollow = dynamic(() => import('../components/ProcessWeFollow'), {
  ssr: false,
})

// import ServicesWeOffer from "../components/ServicesWeOffer";
const ServicesWeOffer = dynamic(() => import('../components/ServicesWeOffer'), {
  ssr: false,
})

// import WhyWebapp from "../components/WhyWebapp";
const WhyWebapp = dynamic(() => import('../components/WhyWebapp'), {
  ssr: true,
})

// import Testimonial from "../components/Testimonial";
const Testimonial = dynamic(() => import('../components/Testimonial'), {
  ssr: false,
})

// import MobileNav from "../components/MobileNav";
const MobileNav = dynamic(() => import('../components/MobileNav'), {
  ssr: false,
})

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
