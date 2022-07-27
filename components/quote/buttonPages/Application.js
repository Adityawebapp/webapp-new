import React from "react";

const Application = ({ formData, setFormData }) => {
  const data = [
    { id: 1, name: "Food" },
    { id: 2, name: "Ecommerce" },
    { id: 3, name: "Taxi" },
    { id: 4, name: "Pickup & Delivery" },
    { id: 5, name: "Grocery Delivery" },
    { id: 6, name: "Laundery" },
    { id: 7, name: "Beauty" },
    { id: 8, name: "Pharmacy Delivery" },
    { id: 9, name: "Health Care" },
    { id: 10, name: "Education" },
    { id: 11, name: "Socail Media" },
    { id: 12, name: "Other" },
  ];
  const handleClick = (data) => {
    console.log("select value", data);
    setFormData({...formData, select_Project:data})
  };

  return (
    <>
      <h1 className="text-center "> Application</h1>

      <div className="quoteForm d-flex justify-content-center ">
        <div className="w-100">
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
