import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';

@Module({
  controllers: [ChatController],
  providers: [],
  imports: [],
})
export class ChatModule {}