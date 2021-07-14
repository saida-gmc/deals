const User = require("../models/UserModel");

exports.updateAdmin = async (req, res) => {
  try {
    await User.findOneAndUpdate({ role: "admin" }, { $set: { ...req.body } });
    res.send({ mesage: "the profile is updated" });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const usersList = await User.find({ role: "admin" });
    res.send(usersList);
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const usersList = await User.find({ role: "user" } );
    res.send(usersList);
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};

exports.getProviders = async (req, res) => {
  try {
    const providersList = await User.find({ role: "provider" });
    res.send(providersList);
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send({ mesage: "the user is deleted" });
  } catch (error) {
    res.status(500).send("server error");
  }
};
