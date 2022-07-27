import Script from "next/script";
import React from "react";

const PrelodinPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default PrelodinPage;
