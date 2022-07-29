import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Link from "next/link";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "formdata");
    axios
      .post("https://hurl.webapp.world/api/common/email-form",  data )
      .then((res) => {
        toast.success("Mail send successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please try again!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    reset();
  };

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

      <section>
        <div className="container-fluid   d-flex flex-column bg-gray">
          <div className="my-5  wow fadeInUp" data-wow-delay="0.1s">
            <div className="p-5">
              <div className="row justify-content-around">
                <div className="col-lg-3 col-sm-12 col-md-3  getInTouch_heading">
                  <h1 className="bottom_line_touch position-relative">
                    <span> GET IN </span>TOUCH
                  </h1>

                  <h2>Want to get more info ?</h2>
                  <p>
                    For us, customer satisfaction comes before sales. We can
                    help you achieve your projects; get in touch with us!
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control inputForm-design"
                            {...register("firstName", { required: true })}
                            placeholder="Full Name*"
                          />
                          {errors.firstName && <p>This field required</p>}
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control inputForm-design"
                            {...register("email", { required: true })}
                            placeholder="Email Address*"
                          />
                          {errors.email && <p>This field required</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control inputForm-design"
                            id="location"
                            placeholder="Location"
                            {...register("location", { required: true })}
                          />
                          {errors.location && <p>This field required</p>}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                          <input
                            type="tel"
                            className="form-control inputForm-design"
                            id="phone_number"
                            minLength="10"
                            maxLength="12"
                            placeholder="Mobile Number"
                            {...register("phone_number", { required: true })}
                          />
                          {errors.phone_number && <p>This field required</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            id="description"
                            rows="6"
                            placeholder="Message"
                            {...register("description", { required: true })}
                          ></textarea>
                          {errors.description && <p>This field required.</p>}
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="invalidCheck"
                          value=""
                        />

                        <label
                          className="form-check-label fs-6"
                          htmlFor="invalidCheck"
                       
                        >
                          I understand and agree that the information submitted
                          in this form will be transmitted to, stored and
                          processed by Webapp, in accordance with their&nbsp;
                           <Link href="/privacy-policy">
                            <a target="_blank" className="text-danger">
                               Privacy Policy.
                            </a>
                          </Link>
                        </label>
                        <div />
                      </div>
                    </div>
                    <div className="col-12 text-center mt-4">
                      <div className="inner">
                        <div className="submit-buttons">
                          <div className="buttonsBlock">
                            <div className="submit-buttons__content my_button_home">
                              <button
                                className="submit-button submit-button--1 close"
                                type="submit"
                                title="Submit"
                              >
                                <span className="submit-button__pending submit-button__pending--1"></span>
                                <span className="submit-button__text submit-button__text--1 btn-2">
                                  Submit
                                </span>
                                <span className="submit-button__loaded submit-button__loaded--1">
                                  <span>Success!</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
