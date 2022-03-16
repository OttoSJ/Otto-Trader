const express = require("express");
const router = express.Router();
const {
  getCar,
  updateCar,
  setCar,
  deleteCar,
} = require("../controllers/carController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCar);
router.post("/", protect, setCar);
router.put("/:id", protect, updateCar);
router.delete("/:id", protect, deleteCar);

module.exports = router;
