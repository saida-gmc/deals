const Deals = require("../models/DealModel");

const { body, validationResult } = require("express-validator");

exports.dealValidator = () => [
  body("title", "title is required").notEmpty(),
  body("cathegory", "cathegory is required").notEmpty(),
  body("description", "description is required").notEmpty(),
  body("details", "details is required").notEmpty(),
  body("date", "date is required").notEmpty(),
  body("price", "price is required ").notEmpty(),
  body("promo", "promo is required ").notEmpty(),
  body("location", "location is required").notEmpty(),
];

exports.addDeal = async (req, res) => {
  try {
    const newDeal = new Deals(req.body);
    await newDeal.save();
    res.send({ message: "the deal is added", newDeal });
  } catch (error) {
    res.status(500).send("server error");
    console.log(error);
  }
  next();
};
exports.deleteDeal = async (req, res) => {
  try {
    await Deals.deleteOne({ _id: req.params.id });
    res.send({ mesage: "the deal is deleted" });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.updateDeal = async (req, res) => {
  try {
    await Deals.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ mesage: "the deal is updated" });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getDeals = async (req, res) => {
  try {
    const dealsList = await Deals.find({});

    res.send(dealsList);
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};

exports.getDealById = async (req, res) => {
  try {
    const deal = await Deals.findById(req.params.id);
    if (deal) {
      res.send(deal);
    } else {
      res.status(404).send("deal not found");
    }
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
