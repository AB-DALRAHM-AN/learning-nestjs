import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsMiddleware } from './products.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // If I wanna target a specific route that middleware handel
    // consumer.apply(ProductsMiddleware).forRoutes({
    //   path: 'products',
    //   method: RequestMethod.GET,
    // });

    //If I wanna target all routes without a specific one
    consumer
      .apply(ProductsMiddleware)
      .exclude({
        method: RequestMethod.GET,
        path: 'products/:id',
      },
    // wildcard exclude
    {
      method: RequestMethod.GET,
      path: 'products/(.*)'
    }
    )
      .forRoutes(ProductsController);
  }
}
