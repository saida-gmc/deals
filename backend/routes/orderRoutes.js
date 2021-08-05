const express = require("express");
const router = express.Router();
const {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
} = require("../controllers/orderController");
const { isAuth } = require("../middleware/isAuth");

router.get("/all", isAuth, getOrders);
router.get("/:id", getOrderById);
router.post("/", isAuth, addOrder);
router.put("/:id", isAuth, updateOrder);

module.exports = router;
