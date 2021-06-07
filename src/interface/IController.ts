import { Request, Response, NextFunction } from 'express';

export interface IController {
  index(req: Request, res: Response, next: NextFunction): Response | Promise<Response>;
  create(req: Request, res: Response, next: NextFunction): Response | Promise<Response>;
  show(req: Request, res: Response, next: NextFunction): Response | Promise<Response>;
  update(req: Request, res: Response, next: NextFunction): Response | Promise<Response>;
  delete(req: Request, res: Response, next: NextFunction): Response | Promise<Response>;
}
