import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../response/errors/CustomError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      success: false,
      messages: {
        text: err.message,
        error: err.serializeErrors(),
        error_code: err.statusCode,
      },
    });
  }

  return res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
