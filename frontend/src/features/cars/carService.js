import axios from "axios";

const API_URL = "/api/inventory/";

const createCar = async (carData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(carData);
  console.log(config);
  const response = await axios.post(API_URL, carData, config);
  console.log(response);
  return response.data;
};

const updateCarDetails = async (carData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + carData._id, carData, config);
  return response.data;
};

const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteCar = async (carId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + carId, config);
  return response.data;
};

const carService = {
  createCar,
  getCars,
  deleteCar,
  updateCarDetails,
};

export default carService;
