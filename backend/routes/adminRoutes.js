const express = require("express");
const router = express.Router();
const {
  getUsers,
  getProviders,
  updateAdmin,
  deleteUser,
} = require("../controllers/adminController");
const { isAuth } = require("../middleware/isAuth");

router.get("/", (req, res) => {
  res.send("welcome admin");
});
router.get("/allusers", getUsers);

router.get("/allproviders", isAuth, getProviders);
router.put("/admin-profile", isAuth, updateAdmin);
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "get user successfully", user: req.user });
});
router.delete("/allusers/:id", isAuth, deleteUser);

router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "get user successfully", user: req.user });
});

module.exports = router;
