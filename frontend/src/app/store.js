import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import carReducer from "../features/cars/carSlice";
import carDetailsReducer from "../features/carDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    carDetails: carDetailsReducer,
  },
});
