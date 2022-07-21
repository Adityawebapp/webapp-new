import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    axios
    .post("http://3.9.246.8/api/common/email-form",  data )
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
      <style jsx>{`
        .career-main {
          background-image: linear-gradient(
            to right top,
            #5e8cd1,
            #2b9abf,
            #4d9fa0,
            #789e8a,
            #969c89
          );
        }
      `}</style>
      <div className=" career-main">
        <div className="row justify-content-center m-0 py-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card shadow m-2 bg-white">
              <div className="card-title text-center bottom_Textline_center position-relative">
                <h2 className="p-3 fs-2">Upload Resume</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">first Name</label>

                      <div className=" mb-3">
                        <input className="form-control" type="text" {...register("firstname")} />
                      </div>

                      <div className="">
                        <label htmlFor="floatingPassword">Email</label>

                        <input
                          type="email"
                          className="form-control"
                          id="floatingPassword"
                          required
                          {...register("email")}
                        />
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <label htmlFor="">Last name </label>

                      <div className=" mb-3">
                        <input type="text" className="form-control" {...register("last_name")} />
                      </div>

                      <div className="">
                        <label htmlFor="floatingPassword">Contact No</label>

                        <input
                          type="number"
                          className="form-control"
                          id="floatingPassword"
                          {...register("phone")}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Upload your CV
                      </label>
                      <input type="file" className="form-control" {...register("resume")}/>
                    </div>
                  </div>

                  <div className=" w-100 text-center mt-3 mb-5">
                    <button
                      type="submit"
                      className="w-25 btn bg-info border-0 text-center rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
