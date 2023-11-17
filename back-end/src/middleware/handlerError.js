import mongoose from "mongoose";
import BasicError from "../err/BasicError.js";
import BadRequest from "../err/BadRequest.js";
import ValidationError from "../err/validationError.js";


// eslint-disable-next-line no-unused-vars
function handlerError(erro, req, res, next){
  if (erro instanceof mongoose.Error.CastError){
    new BadRequest().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError){
    new ValidationError(erro).sendResponse(res);
  } else if(erro instanceof BasicError){
    erro.sendResponse(res);
  } else {
    new BasicError().sendResponse(res);
  }
}

export default handlerError;