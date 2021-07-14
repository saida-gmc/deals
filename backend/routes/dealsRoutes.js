const express = require("express");
const router = express.Router();
const {
  getDeals,
  getDealById,
  addDeal,
  dealValidator,
  deleteDeal,
  updateDeal,
} = require("../controllers/dealControler");
const { isAuth } = require("../middleware/isAuth");

router.get("/", getDeals);
router.get("/:id", getDealById);
router.post("/", isAuth, addDeal, dealValidator);
router.put("/:id", isAuth, updateDeal);
router.delete("/:id", isAuth, deleteDeal);

module.exports = router;
