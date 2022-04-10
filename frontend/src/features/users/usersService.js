import axios from "axios";

const API_URL = "/api/users/";

const getAllUsers = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

const allUsersService = {
  getAllUsers,
};
export default allUsersService;
