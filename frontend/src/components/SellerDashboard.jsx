import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../features/cars/carSlice";
import { clearData, setData } from "../features/carDetailsSlice";
import { numberWithCommas } from "../utilities.js/functions";
import { upperCase } from "../utilities.js/functions";

function SellerDashboard() {
  // const [carData, setCarData] = useState({});

  const { cars, isLoading, isError, message } = useSelector(
    (state) => state.cars
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getCars());
  }, [user, navigate]);

  const sellersInventory = cars.filter((car) => car.user === user._id);
  console.log(sellersInventory);

  const handleCarDetails = (e, car) => {
    e.preventDefault();
    // dispatch(clearData());
    dispatch(setData(car));
    console.log(car);
    navigate("/cardetails");
  };

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className="mb-5">Seller's Dashboard</h1>
        </div>

        <div className="main-display-container">
          {sellersInventory.length > 0 ? (
            sellersInventory.map((car) => (
              <main
                key={car._id}
                onClick={(e) => handleCarDetails(e, car)}
                className="main-container mt-3 mb-2"
              >
                <img className="main-picture" src={car.image} alt="" />
                <div className="sellers-main-message-container">
                  <p className="m-3">
                    {car.year} {upperCase(car.make)} <br />{" "}
                    {upperCase(car.model)}
                    <br />{" "}
                    {`$${numberWithCommas(car.listprice)} / ${numberWithCommas(
                      car.mileage
                    )}mi`}
                  </p>
                </div>
              </main>
            ))
          ) : (
            <h6 className="container-centered">
              You have no vehicles in your inventory
            </h6>
          )}
        </div>

        {/* <section className="sellers-card-container">
          <div className="fake-pic-card"></div>
          <div className="fake-pic-card"></div>
        </section> */}
      </div>
    </>
  );
}

export default SellerDashboard;
