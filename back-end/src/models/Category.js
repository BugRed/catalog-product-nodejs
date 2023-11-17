import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";


const categorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: {
    type: String,
    required: [true, "Category name is mandatory"]
  },
  products: {
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      autopopulate: { select: "name" }
    }]
    
  }

}, {});

categorySchema.plugin(autopopulate);

const category = mongoose.model("categories", categorySchema);

export { category };