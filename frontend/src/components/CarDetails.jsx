import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CarDetails() {
  const { carDetails } = useSelector((state) => state.carDetails);
  console.log(carDetails);
  const {
    color,
    image,
    listprice,
    make,
    mileage,
    model,
    type,
    user,
    year,
    engine,
    ac,
    amfm,
    auxport,
    bluetooth,
    comments,
    createdAt,
    cruisecontrol,
    drivetype,
    leatherseats,
    satradio,
    sunroof,
    transmission,
  } = carDetails.car;
  return (
    <>
      <div className="headings">
        <h1 className="mb-5">Car Details</h1>
      </div>
      <div className="container-centered">
        <main className="container-centered">
          <img className="car-details-image" src={image} alt="" />
        </main>
        <section>
          <h1 className="mt-5">
            {`${year}  ${make.charAt(0).toUpperCase() + make.slice(1)}  ${
              model.charAt(0).toUpperCase() + model.slice(1)
            }`}
          </h1>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>{`$${listprice.toFixed(2)}`} </p>
            </div>
            <div>
              <p>{`${mileage} miles`} </p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Engine Type</p>
            </div>
            <div>
              <p>
                {" "}
                {engine
                  ? engine.charAt(0).toUpperCase() + engine.slice(1)
                  : "N/A"}{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Exterior Color</p>
            </div>
            <div>
              <p>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Transmission</p>
            </div>
            <div>
              <p>
                {drivetype
                  ? drivetype.charAt(0).toUpperCase() + drivetype.slice(1)
                  : "N/A"}{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Vehicle Type</p>
            </div>
            <div>
              <p>
                {type ? type.charAt(0).toUpperCase() + type.slice(1) : "N/A"}{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Drive Train</p>
            </div>
            <div>
              <p>
                {transmission
                  ? transmission.charAt(0).toUpperCase() + transmission.slice(1)
                  : "N/A"}{" "}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h1 className="headings mb-5 mt-5 mr-auto">LUXURY OPTIONS</h1>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>A/C</p>
            </div>
            <div>
              <p>{ac ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>AM/FM</p>
            </div>
            <div>
              <p>{amfm ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>AUX PORT</p>
            </div>
            <div>
              <p>{auxport ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Blue Tooth</p>
            </div>
            <div>
              <p>{bluetooth ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Cruise Control</p>
            </div>
            <div>
              <p>{cruisecontrol ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Leater Seats</p>
            </div>
            <div>
              <p>{leatherseats ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Sat Radio</p>
            </div>
            <div>
              <p>{satradio ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-flex-row mt-4">
            <div>
              <p>Sun Roof</p>
            </div>
            <div>
              <p>{sunroof ? "Included" : "N/A"}</p>
            </div>
          </div>
          <hr />
          <div className="container-centered mt-4">
            <p>Comments</p>
            {/* <p className=" comments-container  ">
              {comments ? comments : "No Comments"}
            </p> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default CarDetails;
