import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {type: String, require: true},
    price: {type: Number},
    description: {type: String},
}, {});

const product = mongoose.model('products', productSchema);

export { product, productSchema };