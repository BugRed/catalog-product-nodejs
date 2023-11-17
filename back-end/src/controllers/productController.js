import NotFound from "../err/NotFound.js";
import { product } from "../models/index.js";

class ProductController {
  static async getAll(req, res, next) {
    try {
      const productList = product.find({});
      req.result = productList;
      next();
    } catch (erro) {
      next(erro);
    }
  }

  static async getById(req, res, next) {
    try {
      const findProduct = await product.findById(req.params.id);
      if (findProduct !== null) {
        res.status(200).json(findProduct);
      } else {
        next(new NotFound("product id not found."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static async post(req, res, next) {
    try {
      const newProduct = await product.create(req.body);
      res.status(201).json({ message: "Product registered successfully!", product: newProduct });
    } catch (erro) {
      next(erro);
    }
  }

  static async put(req, res, next) {
    try {
      const findBook = await product.findByIdAndUpdate(req.params.id, { $set: req.body });

      if (findBook !== null) {
        res.status(200).json({ message: "Update product" });
      } else {
        next(new NotFound("Product id not found."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static async delete(req, res, next) {
    try {
      const findBook = await product.findByIdAndDelete(req.params.id);

      if (findBook !== null) {
        res.status(200).json({ message: "Delete product" });
      } else {
        next(new NotFound("Product id not found."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static getByFilter = async (req, res, next) => {
    try {
      const search = await getSearch(req.query);
      if(search !== null){
        const findResult = product.find(search);
        req.result = findResult;
        next();
      } else {
        res.status(200).send([]);
      }
      
    } catch (erro) {
      next(erro);
    }
  };
}

async function getSearch(params) {
  const { name, minPrice, maxprice } = params;

  let search = {};

  if(name)search.name = { $regex: name, $options: "i" };
  if(minPrice || maxprice) search.price = {};

  if(minPrice) search.price.$gte = minPrice;
  if(maxprice) search.price.$lte = maxprice;

  return search;
}

export default ProductController;