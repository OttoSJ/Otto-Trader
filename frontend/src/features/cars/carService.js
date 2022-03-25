import axios from "axios";

const API_URL = "/api/inventory/";

const createCar = async (carData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, carData, config);
  return response.data;
};

const getCars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
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
};

export default carService;
