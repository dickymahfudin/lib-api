import camelcaseKeys from 'camelcase-keys';
import { Request, Response, NextFunction } from 'express';

export const camelCase = (req: Request, res: Response, next: NextFunction) => {
  req.body = camelcaseKeys(req.body, { deep: true });
  req.params = camelcaseKeys(req.params);
  req.query = camelcaseKeys(req.query);
  return next();
};
