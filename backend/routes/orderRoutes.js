const express = require("express");
const router = express.Router();
const { addOrder, getOrders } = require("../controllers/orderController");
const { isAuth } = require("../middleware/isAuth");

router.get("/all", isAuth, getOrders);
// router.get("/:id", getOrderById);
router.post("/", isAuth, addOrder);

module.exports = router;
