import { Router } from 'express';
import { IRouter } from '../interface/IRouter';

export abstract class BaseRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}
