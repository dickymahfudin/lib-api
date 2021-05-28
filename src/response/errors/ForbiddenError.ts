import { CustomError } from './CustomError';

export class ForbiddenError extends CustomError {
  statusCode = 403;
  text: string;

  constructor(public message: string, text: string) {
    super(message);
    this.text = text;
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: this.text }];
  }
}
