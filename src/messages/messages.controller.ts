import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { MessageDto } from './message.dto';

import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get('')
  async getAll() {
    return this.messageService.getAll();
  }

  @Get(':id')
  async getById(id: number) {
    return this.messageService.getById(id);
  }

  @Post()
  async create(@Body() dto: MessageDto){
    return this.messageService.create(dto);
  }

  @Delete('')
  async deleteAll() {
    return this.messageService.deleteAll();
  }
}
