import { Module } from '@nestjs/common';
import { MessagesModule } from 'src/chat/messages/messages.module';

@Module({
  imports: [MessagesModule],
})
export class ChatModule {}
