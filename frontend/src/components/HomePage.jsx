import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../features/cars/carSlice";
import { clearData, setData } from "../features/carDetailsSlice";
import { numberWithCommas } from "../utilities.js/functions";
import { upperCase } from "../utilities.js/functions";
import { toast } from "react-toastify";
import Pagination from "./Pagintation";

import { FaCarSide, FaCarAlt } from "react-icons/fa";

function HomePage() {
  const [carDataLength, setCarDataLength] = useState(9);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);

  const { cars, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.cars
  );
  const { user } = useSelector((state) => state.auth);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexIfFirstCar = indexOfLastCar - carsPerPage;
  // const currentCarList = cars.slice(indexIfFirstCar, indexOfLastCar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getCars());
  }, [!user, user, isSuccess, navigate]);

  const handleCarDetails = (e, car) => {
    e.preventDefault();
    dispatch(setData({ car }));
    dispatch(setData(car));
    navigate("/cardetails");
  };
  const handleSearch = (e, search) => {
    e.preventDefault();
    setQuery(search);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className=" styled-header"> Otto Trader</h1>
          <h4>Find your drive!</h4>
        </div>
        <section>
          <form className="">
            <div className="container-centered">
              <input
                className="search-bar"
                type="text"
                placeholder="   Search by Make or Model"
                onChange={(e) => handleSearch(e, e.target.value)}
              />
            </div>
          </form>
        </section>
        <div className="main-display-container">
          {cars
            ? cars
                .filter((filteredCars) => {
                  if (query === "") {
                    return cars;
                  } else if (
                    filteredCars.make
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  ) {
                    // setCarDataLength(filteredCars.length);

                    return filteredCars;
                  } else if (
                    filteredCars.model
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  ) {
                    // setCarDataLength(filteredCars.length);
                    return filteredCars;
                  }
                })
                .slice(indexIfFirstCar, indexOfLastCar)
                .map((filteredCars) => (
                  <main
                    key={filteredCars._id}
                    onClick={(e) => handleCarDetails(e, filteredCars)}
                    className="main-container mt-3 mb-2"
                  >
                    <img
                      className="main-picture"
                      src={filteredCars.image}
                      alt=""
                    />
                    <div className="sellers-main-message-container">
                      <p className="m-3">
                        {filteredCars.year} {upperCase(filteredCars.make)}{" "}
                        <br /> {upperCase(filteredCars.model)}
                        <br />{" "}
                        {`$${numberWithCommas(
                          filteredCars.listprice
                        )} / ${numberWithCommas(filteredCars.mileage)}mi`}
                      </p>
                    </div>
                  </main>
                ))
            : null}
        </div>
        <Pagination
          paginate={paginate}
          totalCars={cars.length}
          carsPerPage={carsPerPage}
        />
      </div>
    </>
  );
}

export default HomePage;
