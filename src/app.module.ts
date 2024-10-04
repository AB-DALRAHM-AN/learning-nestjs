// Root module of the application

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MessagesModule } from './chat/messages/messages.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UsersModule, ProductsModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
