import { BadRequestError } from './BadRequestError';
import { DatabaseConnectionError } from './DatabaseConnectionError';
import { NotFoundError } from './NotFoundError';
import { RequestValidationError } from './RequestValidationError';
import { UnauthorizedError } from './UnauthorizedError';
import { ForbiddenError } from './ForbiddenError';

export const ResponseError = {
  BadRequestError,
  DatabaseConnectionError,
  NotFoundError,
  RequestValidationError,
  UnauthorizedError,
  ForbiddenError,
};
