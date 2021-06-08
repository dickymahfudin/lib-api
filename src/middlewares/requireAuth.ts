import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ResponseError } from '../response/errors';

export const requireAuth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return next(new ResponseError.UnauthorizedError());
  }
  const secretKey: string = process.env.JWT_SECRET_KEY || 'dism';
  const token: string = req.headers.authorization.split(' ')[1];
  try {
    const crential: string | object = jwt.verify(token, secretKey);
    req.app.locals.credential = crential;
    return next();
  } catch (error) {
    return next(new ResponseError.ForbiddenError(error.name, error.message));
  }
};
