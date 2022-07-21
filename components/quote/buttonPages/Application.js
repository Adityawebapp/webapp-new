import React from "react";

const Application = () => {
  const data = [
    { id: 1, name: "Food" },
    { id: 2, name: "Ecommerce" },
    { id: 3, name: "Texi" },
    { id: 4, name: "Pickup & Develivery" },
    { id: 5, name: "Grocery Develivery" },
    { id: 7, name: "Laundery" },
    { id: 8, name: "Beauty" },
    { id: 9, name: "Pharmacy Develivery" },
    { id: 10, name: "Health Care" },
    { id: 11, name: "Education" },
    { id: 11, name: "Socail Media" },
    { id: 11, name: "Other" },
  ];
  const handleClick = (e) => {
    console.log("select value", e);
  };

  return (
    <>
      <h1 className="text-center "> get quote</h1>

      <div className="quoteForm d-flex justify-content-center ">
        <div className="w-50">
          <div className="row row-cols-3 g-4 justify-content-center">

            {data.map((item) => (
              <div className="col" key={item.id}>
                <button
                  className="btn  w-100"
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </button>
              </div>
            ))}


          </div>
        </div>

        {/* <div className="container">
          <div className="row row-cols-2">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col-6">Column</div>
            <div className="col">Column</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Application;
