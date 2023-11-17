import BasicError from "./BasicError.js";

class BadRequest extends BasicError{
  constructor(message = "One or more data provided is incorrect"){
    super(message, 400);
  }
}

export default BadRequest;