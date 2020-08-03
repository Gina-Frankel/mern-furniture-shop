//endpoint for  pages/product.js
import Product from "../../models/Product";

export default async (req, res) => {
  // req.query is an object with query strings
  const { _id } = req.query;
  // finds one product + filter of id
  const product = await Product.findOne({ _id: _id });
  res.status(200).json(product);
};
