import BadRequest from "./BadRequest.js";

class ValidationError extends BadRequest {
  constructor(erro) {
    const messagesErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    super(`The following errors were found: ${messagesErro}`);
  }
}

export default ValidationError;