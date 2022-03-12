const express = require("express");
const router = express.Router();
const {
  getInventory,
  updateInventory,
  setInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

router.get("/", getInventory);
router.post("/", updateInventory);
router.put("/:id", setInventory);
router.delete("/:id", deleteInventory);

module.exports = router;
