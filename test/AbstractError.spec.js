'use strict';

import AbstractError,
  { InstantiateAbstractClassError } from '../src/AbstractError';

class ExtendedError extends AbstractError {}

describe('AbstractError', () => {
  it('throws InstantiateAbstractClassError', () => {
    return expect(() => new AbstractError())
    .to.throw(InstantiateAbstractClassError);
  });

  let errorMessage = 'Extended.';
  let error = new ExtendedError(errorMessage);

  it('have .name and equals extended class name', () => {
    return expect(error).to.have.property('name', ExtendedError.name);
  });

  it('have .message and equals constructor passed message', () => {
    return expect(error).to.have.property('message', errorMessage);
  });

  it('have .stack', () => {
    return expect(error).to.have.property('stack');
  });
});
