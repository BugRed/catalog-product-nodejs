import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";


const categorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: {
    type: String,
    required: [true, "Category name is mandatory"]
  },
  products:  [{ type: mongoose.Types.ObjectId, ref: "product" }]

}, {});

categorySchema.plugin(autopopulate);

const category = mongoose.model("categories", categorySchema);

export { category };