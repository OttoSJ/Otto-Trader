import React from "react";
import { FaCar } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../features/cars/carSlice";

function EditCarDetails() {
  const { cars, isLoading, isError, message } = useSelector(
    (state) => state.cars
  );
  const { user } = useSelector((state) => state.auth);
  const { carDetails } = useSelector((state) => state.carDetails);

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

  const onSubmit = (e) => {};
  const onChange = (e) => {};
  console.log(carDetails);
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="mt-5 headings">
            {" "}
            <FaCar className="mb-1" /> Edit Vehilcle Details
          </h1>
          <form onSubmit={onSubmit} className="row g-3 mt-3">
            <div className="col-6">
              <label htmlFor="make" className="form-label">
                Make
              </label>
              <input
                autoFocus
                type="text"
                className="form-control"
                name="make"
                id="make"
                placeholder="Make"
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                name="model"
                id="model"
                placeholder="Model"
                onChange={onChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="text"
                className="form-control"
                name="year"
                id="year"
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="type" className="form-label">
                Body Type
              </label>
              <input
                type="text"
                className="form-control"
                name="type"
                id="type"
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="listprice" className="form-label">
                Listprice
              </label>
              <input
                type="text"
                className="form-control"
                name="listprice"
                id="listprice"
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                name="color"
                id="color"
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="drivetype" className="form-label">
                Drive Type
              </label>
              <input
                type="text"
                className="form-control"
                name="drivetype"
                id="drivetype"
                placeholder=""
                onChange={onChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="engine" className="form-label">
                Engine
              </label>
              <input
                type="text"
                className="form-control"
                name="engine"
                id="engine"
                onChange={onChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="transmission" className="form-label">
                Transmission
              </label>
              <input
                type="text"
                className="form-control"
                name="transmission"
                id="transmission"
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mileage" className="form-label">
                Mileage
              </label>
              <input
                type="text"
                className="form-control"
                name="mileage"
                id="mileage"
                onChange={onChange}
              />
            </div>
            <div className="headings m-4">
              <h2> Additional Options</h2>
            </div>
            <div className="options-container">
              <div className="col-md-2">
                <label htmlFor="ac" className="form-label">
                  A/C
                </label>
                <select
                  id="ac"
                  name="ac"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="leatherseats" className="form-label">
                  Leather Seats
                </label>
                <select
                  id="leatherseats"
                  name="leatherseats"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="sunroof" className="form-label">
                  Sun Roof
                </label>
                <select
                  id="sunroof"
                  name="sunroof"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="bluetooth" className="form-label">
                  Bluetooth
                </label>
                <select
                  id="bluetooth"
                  name="bluetooth"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="cruisecontrol" className="form-label">
                  Cruise Control
                </label>
                <select
                  id="cruisecontrol"
                  name="cruisecontrol"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2 ">
                <label htmlFor="satradio" className="form-label">
                  Sat Radio
                </label>
                <select
                  id="satradio"
                  name="satradio"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2 ">
                <label htmlFor="auxport" className="form-label">
                  Aux Port
                </label>
                <select
                  id="auxport"
                  name="auxport"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="amfm" className="form-label">
                  Am/Fm
                </label>
                <select
                  id="amfm"
                  name="amfm"
                  className="form-select"
                  onChange={onChange}
                >
                  <option value="Choose">Choose...</option>
                  <option value="true">Yes </option>
                  <option value="false">No </option>
                </select>
              </div>
            </div>

            <div className="col-12 mb-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCarDetails;
