const express = require("express");
const router = express.Router();
const {
  Register,
  Login,
  updateUser,
} = require("../controllers/userController");
const { isAuth } = require("../middleware/isAuth");
const { isAdmin } = require("../middleware/isAdmin");
const {
  getUsers,
  updateAdmin,
  getProviders,
  deleteUser,
  getAdmin,
} = require("../controllers/adminController");
const {
  registerValidator,
  validation,
  loginValidator,
} = require("../middleware/userValidator");

router.post("/register", registerValidator(), validation, Register);
router.post("/login", loginValidator(), validation, Login);

router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "get user successfully", user: req.user });
});
router.put("/user-profile/:id", isAuth, updateUser);
router.put("/provider-profile/:id", isAuth, updateUser);

//admin routes
router.get("/", (req, res) => {
  res.send("welcome admin");
});
router.get("/admin", isAuth, getAdmin);
router.get("/admin-profile/:id/allusers", isAuth, getUsers);
router.get("/admin-profile/:id/allproviders", isAuth, getProviders);
router.put("/admin-profile/:id", isAuth, updateAdmin);
router.delete("/admin-profile/users/:id", isAuth, deleteUser);
router.delete("/admin-profile/providers/:id", isAuth, deleteUser);

module.exports = router;
