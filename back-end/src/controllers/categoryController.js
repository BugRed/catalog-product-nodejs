import NotFound from "../err/NotFound.js";
import { category } from "../models/index.js";

class CategoryController {
  static async getAll(req, res, next) {
    try {
      const categoryList = category.find({});
      req.result = categoryList;
      next();
    } catch (erro) {
      next(erro);
    }
  }

  static async getById(req, res, next) {
    try {
      const findCategory = await category.findById(req.params.id);
      if (findCategory !== null) {
        res.status(200).json(findCategory);
      } else {
        next(new NotFound("category id not found."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static async post(req, res, next) {
    try {
      const newCategory = await category.create(req.body);
      res.status(201).json({ message: "category registered successfully!", category: newCategory });
    } catch (erro) {
      next(erro);
    }
  }

  static async put(req, res, next) {
    try {
      const findCategory = await category.findByIdAndUpdate(req.params.id, { $set: req.body });

      if (findCategory !== null) {
        res.status(200).json({ message: "Update category" });
      } else {
        next(new NotFound("Category id not found."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static async delete(req, res, next) {
    try {
      const findCategory = await category.findByIdAndDelete(req.params.id);

      if (findCategory !== null) {
        res.status(200).json({ message: "Delete category" });
      } else {
        next(new NotFound("Category id not found."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static getByFilter = async (req, res, next) => {
    try {
      const search = await getSearch(req.query);
      if(search !== null){
        const findResult = category.find(search);
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
  const { name } = params;

  let search = {};

  if(name)search.name = { $regex: name, $options: "i" };

  return search;
}

export default CategoryController;