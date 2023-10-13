import { Controller, Post, Body, Sse } from '@nestjs/common';
import { sendMessage } from '../main';

@Controller('chat')
export class ChatController {

  @Post('sendMessage')
  async sendMessage(@Body() requestBody) {
    const message = requestBody.message;
    const response = await sendMessage(message);
    return { response };
  }
}