import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ProductsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.body);
    next();
  }
}
