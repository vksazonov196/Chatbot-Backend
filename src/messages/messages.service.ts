import { Injectable } from '@nestjs/common';
import { MessageDto } from './message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessagesEntity } from './messages.entity';


@Injectable()
export class MessagesService {

  constructor(
    @InjectRepository(MessagesEntity) 
    private readonly messageRepository: Repository<MessagesEntity>) {}

  async getAll() {
    return this.messageRepository.find();
  }

  async getById(id: number) {
    return this.messageRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async create(dto: MessageDto){
    const message = this.messageRepository.create(dto)
    return this.messageRepository.save(message)
  }

  async deleteAll(){
    return this.messageRepository.clear()
  }
}
