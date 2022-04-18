import axios from "axios";

const API_URL = "/api/inventory/cardetails/";

const getOneCarById = async (carId) => {
  // console.log(carId);
  const response = await axios.get(API_URL + carId);
  // console.log(response);
  return response.data;
};

const carDetailsService = {
  getOneCarById,
};

export default carDetailsService;
