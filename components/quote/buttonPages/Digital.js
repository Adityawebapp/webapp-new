import React from "react";

const Digital = ({ formData, setFormData }) => {
  const data = [
    { id: 1, name: "SEO" },
    { id: 2, name: "PPC" },
    { id: 3, name: "CRO" },
    { id: 4, name: "AI socail Media" },
    { id: 5, name: "Content Writer" },
    { id: 6, name: "Other" },

  ];
  const handleClick = (e) => {
    console.log("select value", e);
    setFormData({...formData, select_Project:e})
  };

  return (
    <>
      <h1 className="text-center "> Digital</h1>

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

      </div>
    </>
  );
};

export default Digital;
