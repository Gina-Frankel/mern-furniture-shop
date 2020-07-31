import mongoose, { Mongoose } from "mongoose";
// enables a generation of id
import shortid from "shortid";
const { String, Number } = Mongoose.Schema.Types;

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  sku: { type: String, unique: true, default: shortid.generate() },
  mediaUrl: { type: String, required: true },
});

//if Product model is already available do not need to generate it again
export default mongoose.models.product ||
  //how to generate model = mongoose.models - references to all created models
  mongoose.models(Product, ProductSchema);
