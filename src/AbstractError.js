'use strct';

export default class AbstractError extends Error {
  constructor (message) {
    super(message);

    if (this.constructor === AbstractError) {
      throw new InstantiateAbstractClassError();
    }

    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class InstantiateAbstractClassError extends AbstractError {
  constructor () {
    super();

    this.code = 500;
    this.reason = 'instantiate_abstract_class';
    this.message = 'Cannot instantiate abstract class.';
  }
}
