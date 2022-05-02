const {
  products,
  reviews,
  users,
  categories,
  payments,
  carts,
} = require("../utils/fakeData");

const { Categories } = require("../models");
const { Payments } = require("../models");
const { Products } = require("../models");
const { Users } = require("../models");
const { Reviews } = require("../models");
const { Orders } = require("../models");

const db = require("./index");

// db.sync({ force: true })
//   .then(() => {
//     const promises = [
//       Categories.bulkCreate(categories),
//       Payments.bulkCreate(payments),
//       Products.bulkCreate(products),
//       Users.bulkCreate(users),
//       Reviews.bulkCreate(reviews),
//       Orders.bulkCreate(carts),
//     ]
//     return Promise.all(promises)
//   })
//   .then(() => console.log("seed finalizado"))
//   .catch((err) => console.log("aca", err));

//async await

(async () => {})(); //--> iife

const seedDb = async () => {
  try {
    await db.sync({ force: true });
    const promises = [
      Categories.bulkCreate(categories),
      Payments.bulkCreate(payments),
      Products.bulkCreate(products),
      Users.bulkCreate(users),
      Reviews.bulkCreate(reviews),
      Orders.bulkCreate(carts),
    ];
    await Promise.all(promises);
    console.log("seed finalizado");
  } catch (error) {
    console.log(error);
  }
};
seedDb();

db.sync({ force: true })
  .then(() => {
    const promises = [
      Categories.bulkCreate(categories),
      Payments.bulkCreate(payments),
      Products.bulkCreate(products),
      Users.bulkCreate(users),
      Reviews.bulkCreate(reviews),
      Orders.bulkCreate(carts),
    ];
    return Promise.all(promises);
  })
  .then(() => console.log("seed finalizado"))
  .catch((err) => console.log("aca", err));
