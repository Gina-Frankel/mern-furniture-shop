//import products from "../../static/products.json";

import connectDb from "../../utils/connectDb";
import Product from "../../models/Product";

connectDb();

export default async (req, res) => {
  //find = entire collection - return a value that can be resolved with await
  const products = await Product.find();
  res.status(200).json(products);
};
