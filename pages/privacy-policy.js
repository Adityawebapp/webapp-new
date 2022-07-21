import React from "react";
import Head from 'next/head'
import styles from "/styles/css/privacy-policy.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fevIcon.png" />

        <title>Privacy Policy - Webapp World </title>
       
      </Head>

      <div className=" container privacy_policy pb-5">
        <div className="row">
          <div className="section-head col-sm-12">
            <h1 className="text-center text-capitalize my-4">Privacy Policy</h1>
            <p>
              As a service provider, we value our visitors and clients and
              respect their rights to privacy. Therefore, we have designed a
              privacy policy to explain how their Personally Identifiable
              Information” is being used online. It is our humble request for
              everyone to read the entire privacy policy carefully to understand
              how we use, collect and protect their information on our website.
              For instance, what information we collect as soon as you sign up
              for our blogs, newsletters, or perhaps fill up an inquiry form?
            </p>
          </div>
        </div>
        <hr className="my-4" />

        <div className="fs-4 my-4 information_provider">
          <h3>Information You Provide</h3>

          <p>
            As soon as you register on our website, you may be asked to enter
            the following personal information.
          </p>
          <ul>
            <li className={styles.li}>Name</li>
            <li className={styles.li}>Email</li>
            <li className={styles.li}>Phone Number</li>
          </ul>
          <p>
            {" "}
            While filling out an inquiry form or a feedback form, for instance,
            you`ll be asked to enter the above Personal Information. This
            information helps us to provide a personalised experience for our
            service.
          </p>
        </div>

        <hr className="my-4" />

        <div className="fs-4 my-4 ip_address">
          <h3>IP Address</h3>
          <p>
            The site may access your devices location using your internet
            protocol (IP) address. This information helps us to follow your
            country`s data compliance regulations to their fullest. We may also
            use your IP address to determine the fastest route for your device
            to connect to our website.
          </p>
        </div>

        <div className="fs-4 my-4 your_information">
          <h3>How Do We Use Your Information?</h3>
          <p>
            The information, we collect from our visitors and clients are used
            in the following manner:
          </p>
          <ul>
            <li className={styles.li}>
              To personalise the user experience by delivering the type of
              content and services as per your interests.
            </li>
            <li className={styles.li}>
              To notify you regarding special offers on services via sending
              periodic emails.
            </li>
            <li className={styles.li}>
              To send you reminders and confirmations as per your chosen
              services.
            </li>
            <li className={styles.li}>
              To send you technical notices, updates, alerts and support
              messages.
            </li>
            <li className={styles.li}>
              To respond to your queries, feedback, and comments to provide
              better customer service and support.
            </li>
            <li className={styles.li}>
              To notify you of the latest services, offers, news posts, and
              blogs, in which we think will interest you.
            </li>
            <li className={styles.li}>
              To analyse and manage the activities with our content and
              website`s performance.
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="fs-4 my-4">
          <h3>Email Management</h3>
          <p>
            Webapp May Try To Contact You Via Emails, Which May Happen Due To
            Several Reasons. For Instance, When You Subscribe To Our
            Newsletters, You May Receive Periodic Emails Regarding The Content
            Update.
          </p>
          <p>
            Emails, Which You`ll Receive From Webapp Will Always Contain A Link
            In The Footer, Where You Can Unsubscribe Altogether. You Can Also
            Select Your Communication Preferences Using The Same Link.
          </p>
        </div>
        <hr className="my-4" />
        <div className="fs-4 my-4">
          <h3>When Do We Share And Disclose Your Information?</h3>
          <p>
            Our Visitor`s Privacy Is Our Priority, And Therefore, At Every Step,
            We Make Sure To Protect It. We Only Share Your Personal Information
            Under One Of The Following Circumstances.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>With Your Consent</h3>
          <p>
            When You Allow Webapp To Share Your Personal Information; It may
            happen when You Submit Your Information Through Our Offers Or
            Services.
          </p>
          <p>
            For Instance, If You Decide To Fill Out A Query Form, Your Name,
            Email Address, And Company Name it will be collected by Webapp.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>Legal Obligations</h3>
          <p>
            Webapp may also disclose your personal information when it is
            required to satisfy a law, regulation, ;egal process, or a
            governmental request. It may also happen when there needs to be an
            investigation carried out regarding violation of the term of use, or
            protect the rights, or safety of Webapp and its users. Preventing
            security frauds is yet another scenario where information disclosure
            may be required.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>Business transfers</h3>
          <p>
            If Webapp is involved in a merger, acquisition, or any form of
            transfer or sale of some or all of its business, we may share your
            personal information in connection with the transaction itself.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>
            What Security Measures We Take To Protect Visitor`s Information?
          </h3>
          <p>
            To protect your information, a regular scan is carried out for
            security breaches and vulnerabilities to make your visit as safe as
            possible. We also use SSL certification to make sure that every
            transaction is safe and secured.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>How Can You Opt-Out?</h3>
          <p>
            In case you want to set preferences to google displaying Ads to you,
            you can visit the Google Ad setting page.You can also permanently
            Opt- out by adding the Google analytics Opt-out browser Add on.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>Do Not Track Signals</h3>
          <p>
            We honour do not track signals and once we receive a do not track
            signal, we do not use advertising at all.
          </p>

          <p>
            {" "}
            <span className="">We have implemented the following:</span>{" "}
            Remarketing with Google AdSense Demographics and Interests Reporting
            We along with third-party vendors, such as Google use first-party
            cookies and third-party cookies together to compile data regarding
            user interactions with ad impressions, and other ad service
            functions as they visit our website.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>COPPA Children Online Privacy Protection Act</h3>
          <p>
            Parents are put in control of the collection of personal information
            from children under the age of 13. The federal trade commission, the
            Nations consumer protection agency, enforces the COPA Rule, which
            states what operations websites and online services should do to
            protect children`s privacy and safety online. Furthermore, we do not
            advertise to children under the age of 13.{" "}
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>Fair Information Practices</h3>
          <p>
            To be in line with the fair information practices law, we will take
            the following actions as soon as a data breach occurs.
          </p>
          <p>
            We will notify the user via email regarding the same within one
            business day. We also agree to the individual redress principle,
            which requires that every individual has a right to pursue legally
            enforceable rights against data collectors and processors who fail
            to follow the law itself. Individuals also have the resources to
            trigger a legal investigation against data processors.
          </p>
        </div>

        <div className="fs-4 my-4">
          <h3>CAN-SPAM Act</h3>
          <p>
            The CAN-SPAM Act is a law that establishes guidelines for sending
            commercial emails and allows the users to stop emails which are
            being sent out to them. Failure on doing so is considered a
            violation and penalties may apply.
          </p>
          <p>
            {" "}
            <span>
              To Be Following the CAN-SPAM We Agree To The Following:
            </span>{" "}
          </p>
          <ul>
            <li className={styles.li}>
              {" "}
              We never send misleading subjects through our emails{" "}
            </li>
            <li className={styles.li}>
              We include the physical address of our office headquarters.
            </li>
            <li className={styles.li}>
              In case of an Opt-out/Do Not Track Signal, we make sure, the user
              does not receive emails from us at all.
            </li>
            <li className={styles.li}>
              We attach a link at the end of every email from where the user can
              unsubscribe.
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="">
          <h3>Contact Us</h3>
          <p>
            In case you have any queries regarding the privacy policies, feel
            free to contact us using the following information.
          </p>
          <p>Webapp t/a RLC Management Limited</p>
          <p>20-22 Wenlock Rd, London N1 7GU, United Kingdom</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
