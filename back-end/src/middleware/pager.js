import BadRequest from "../err/badRequest.js";

async function pager(req, res, next) {
  try {
    let { limit = 5, page = 1, ordenation = "_id:-1" } = req.query;

    let [fieldsOrder, order] = ordenation.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      const pagerFind = await result.find()
        .sort({ [fieldsOrder]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).json(pagerFind);
    } else {
      next(new BadRequest());
    }
  } catch (erro) {
    next(erro);
  }
}

export default pager;