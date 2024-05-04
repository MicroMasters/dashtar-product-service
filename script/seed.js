require("dotenv").config();
const { connectDB } = require("../config/db");

const Coupon = require("../models/Coupon");
const couponData = require("../utils/coupon");

const Product = require("../models/Product");
const productData = require("../utils/products");

const Category = require("../models/Category");
const categoryData = require("../utils/categories");

const Attribute = require("../models/Attribute");
const attributeData = require("../utils/attributes");

connectDB();
const importData = async () => {
  try {
    await Attribute.deleteMany();
    await Attribute.insertMany(attributeData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Product.deleteMany();
    await Product.insertMany(productData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
