import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/css/contact.module.css";
import Testimonial from "../components/Testimonial";
import Head from "next/head";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const Contact = () => {
  const [isHover, setHover] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) =>{
    axios
    .post("https://hurl.webapp.world/api/common/email-form",  data )
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

      console.log(data, "data send succesfuly")
       reset()
    })
    .catch((err) => {
      console.log(err);
      toast.error("mail sending fail", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }


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

      <Head>
        <title>Contact Us For All Your IT Needs | Webapp UK</title>
        <meta
          name="description"
          content="Webapp and software development company. Contact us to get an answer to all custom software solutions and mobile app development related queries. "
        />
        <meta
          name="keywords"
          content="Custom software solutions, mobile app development"
        />

        <link rel="canonical" href="https://www.webapp.world/contact" />
      </Head>

      <div className={styles.mainContectForm}></div>
      <div className={styles.formContainer}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="right-ride">
                <div className="fw-700">
                  <h1 className="fw-bolder text-white">
                    Kickstart Your Digital Journey Today
                  </h1>
                  <p className="text-white">
                    Get all your questions answered by our business development
                    team.
                  </p>
                </div>
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    className={styles.btn}
                  >
                    Career
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    className={styles.btn}
                  >
                    Aditya
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <motion.div
                style={{
                  backgroundColor: "#fff",
                }}
                animate={{ backgroundColor: isHover ? "#F6F6F6" : "#fff" }}
                transition={{ duration: 0.5 }}
                className=" p-4 rounded shadow"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <motion.input
                          whileTap={{ scale: 1.05 }}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder=""
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName?.type === "required" &&
                          "Field is required"}
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <motion.input
                          whileTap={{ scale: 1.05 }}
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                          {...register("email", { required: true })}
                        />
                        {errors.email?.type === "required" &&
                          "Field is required"}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Skype Id
                        </label>
                        <motion.input
                          whileTap={{ scale: 1.05 }}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder=""
                          {...register("name", { required: true })}
                        />
                      </div>
                      {errors.name?.type === "required" && "Field is required"}
                    </div>

                    <div className="col-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Phone no.
                        </label>
                        <motion.input
                          whileTap={{ scale: 1.05 }}
                          type="phone"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                          {...register("phone", { required: true})}
                        />
                        {errors.phone?.type === "required" &&
                          "Field is required"}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      budget
                    </label>
                    <select
                      className="form-select"
                      aria-label="What's your budget"
                      {...register("buget",{ required: true})}
                    >
                      <option disabled className="bg-info text-white" selected>
                        Select your budget
                      </option>
                      <option value="Less then $10kLess then $10k">
                        Less then $10kLess then $10k
                      </option>
                      <option value="Less then $10k to $50k">
                        Less then $10k to $50k
                      </option>
                      <option value="Less then $50k to $100">
                        Less then $50k to $100
                      </option>
                      <option value="More then $100k">More then $100k</option>
                    </select>
                  </div>
                  {errors.buget?.type === "required" && "Field is required"}

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Project Description
                    </label>
                    <motion.textarea
                      whileTap={{ scale: 1.05 }}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      {...register("description", { required: true })}
                    ></motion.textarea>
                    {errors.buget?.type === "required" && "Field is required"}
                  </div>
                  {/* <motion.input
                    whileTap={{ scale: 1.08 }}
                    className="btn btn-info"
                    type=""
                    value="Submit"
                  /> */}

                  <motion.input
                    type="submit"
                    className="btn "
                    value="Submit"
                    style={{
                      backgroundColor: "#fff",
                    }}
                    animate={{
                      scale: isHover ? 0.9 : 1,
                    }}
                    onHoverStart={() => {
                      setHover(true);
                    }}
                    onHoverEnd={() => {
                      setHover(false);
                    }}
                  />
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
    </>
  );
};

export default Contact;
