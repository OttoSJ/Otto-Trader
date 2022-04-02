import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../features/cars/carSlice";
import { clearData, setData } from "../features/carDetailsSlice";
import { numberWithCommas } from "../utilities.js/functions";
import { upperCase } from "../utilities.js/functions";

function HomePage() {
  const [carData, setCarData] = useState({});

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
      navigate("/");
    }
    dispatch(getCars());
  }, [user, navigate]);

  const handleCarDetails = (e, car) => {
    e.preventDefault();
    dispatch(setData({ car }));

    navigate("/cardetails");
  };

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className="mb-5">Home Page</h1>
        </div>

        <div className="main-display-container">
          {cars.map((car) => (
            <main
              key={car._id}
              onClick={(e) => handleCarDetails(e, car)}
              className="main-container mt-3"
            >
              <img className="main-picture" src={car.image} alt="" />
              <div className="sellers-main-message-container">
                <p className="m-3">
                  {car.year} {upperCase(car.make)} <br /> {upperCase(car.model)}
                  <br />{" "}
                  {`$${numberWithCommas(car.listprice)} / ${numberWithCommas(
                    car.mileage
                  )}mi`}
                </p>
              </div>
            </main>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
