import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../features/cars/carSlice";

function SellerDashboard() {
  const { cars, isLoading, isError, message } = useSelector(
    (state) => state.cars
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // I will need to change getCars to getOneCar after I add the slice and serive functions
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getCars());
  }, [user, navigate]);

  console.log(cars);

  const handleCar = (e) => {
    console.log("Car handled");
    navigate("/cardetails");
  };

  return (
    <>
      <div className="sellers-page-container">
        <div className="headings">
          <h1 className="mb-5">Seller's Dashboard</h1>
        </div>

        <div onClick={handleCar} className="sellers-container">
          {cars.map((car) => (
            <main key={car._id} className="sellers-main-container mt-3">
              <img className="sellers-main-picture" src={car.image} alt="" />
              <div className="sellers-main-message-container">
                <p className="m-3">
                  2019 {car.make} <br /> {car.model} <br />{" "}
                  {`${car.listprice} ${car.mileage}mi`}
                </p>
              </div>
            </main>
          ))}
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
