import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: {
    type: String, 
    required: [true, "Product name is mandatory"]},
  price: {
    type: Number,
    validate:{
      validator: (price) => {
        return price > 0;
      },
      message: "The product price must be greater than 0. Value provided: {VALUE}"
    }
  },
  description: {type: String},
  imgUrl: {type: String},
  categories:  [{ 
    type: mongoose.Types.ObjectId,
    ref: "category",
    required: [true, "The product must have at least one category"]}]
}, {});

productSchema.plugin(autopopulate);

const product = mongoose.model("products", productSchema);

export { product, productSchema };