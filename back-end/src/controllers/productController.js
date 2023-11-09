import { product } from '../models/Product.js'

class ProductController{
    static async getAll(req, res){
        try{
            const productList = await product.find({});
            res.status(200).json(productList);
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - Request failed`});
        }
    };

    static async getById(req, res){
        try{
            const findProduct = await product.findById(req.params.id);
            res.status(200).json(findProduct);
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - Request failed`});
        }
    };

    static async post(req, res){
        try{
            const newProduct = await product.create(req.body);
            res.status(201).json({ message: 'Product registered successfully!', product: newProduct });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - Insertion failed`});
        }
    };

    static async put(req, res){
        try{
            await product.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: 'Update product'});
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - Update failed`});
        }
    };

    static async delete(req, res) {
        try {
            await product.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Delete product' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Deletion failed` })
        }
    };


};

export default ProductController;