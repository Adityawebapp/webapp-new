import { Suspense } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import "../styles/css/Footer.css";
import "../styles/css/getInTouch.css";
import "../styles/css/HowToHelp.css";
import "../styles/css/industriesWeServe.css";
import "../styles/css/ServicesWeOffer.css";
import "../styles/css/ProcessWeFollow.css";
import "../styles/css/career.css";
import "../styles/css/WhoWeAre.css";
import "../styles/css/projects.css";
import "../styles/css/services/android-app-development.css";
import "../styles/css/services/android-game-development.css";
import "../styles/css/services/angular-app.css";
import "../styles/css/services/augmented-virtual.css";
import "../styles/css/services/ios-app-development.css";
import "../styles/css/services/ios-game-development.css";
import "../styles/css/services/iot-app-development.css";
import "../styles/css/services/php-development.css";
import "../styles/css/services/reactjs.css";
import "../styles/css/services/nodejs.css";
import "../styles/css/services/laravel.css";
import "../styles/css/services/python.css";
import "../styles/css/services/uiux.css";
import "../styles/css/services/wireframe.css";
import "../styles/css/Navbar.css";
import "../styles/css/company.css";

import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../images/fevIcon.png" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />

       
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </Head>

      <TopNavbar />
      <Navbar />
      <Component {...pageProps} />

      <Footer />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
    
    </>
  );
}

export default MyApp;
