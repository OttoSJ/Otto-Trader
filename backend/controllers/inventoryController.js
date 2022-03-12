const asyncHandler = require("express-async-handler");

const getInventory = asyncHandler(async (req, res) => {
  res.status(200).json(`Message: Get Inventory`);
});

const setInventory = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Set Inventory");
});

const updateInventory = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Update Inventory");
});

const deleteInventory = asyncHandler(async (req, res) => {
  res.status(200).json("Message: Delete Inventory");
});

module.exports = {
  getInventory,
  updateInventory,
  setInventory,
  deleteInventory,
};
