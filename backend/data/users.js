const bcrypt = require("bcrypt");
const users = [
  {
    name: "userAdmin",
    email: "admin@deal.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: True,
  },
  {
    name: "saida",
    email: "saida@deal.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: False,
  },
  {
    name: "user",
    email: "user@deal.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: False,
  },
];

module.exports = users;
