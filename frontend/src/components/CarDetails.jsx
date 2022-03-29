import React from "react";

function CarDetails() {
  return (
    <>
      <div className="headings">
        <h1>Car Details</h1>
      </div>
      <div className="container-centered">
        <main className="container-centered">
          <img
            className="car-details-image"
            src="https://cars.usnews.com/static/images/Auto/custom/14864/2022_Ford_Mustang_1.jpg"
            alt=""
          />
        </main>
        <section>
          <h1>2020 Ford Mustang</h1>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>$25,876</p>
            </div>
            <div>
              <p>75,342 miles</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Engine Type</p>
            </div>
            <div>
              <p>6cyl</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Transmission</p>
            </div>
            <div>
              <p>Automatic</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Exterior Color</p>
            </div>
            <div>
              <p>Blue</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CarDetails;
