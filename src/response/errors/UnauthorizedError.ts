import { CustomError } from './CustomError';

export class UnauthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Unauthorized');

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Authenticated' }];
  }
}
