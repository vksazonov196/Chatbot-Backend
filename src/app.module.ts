import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatController } from './chat/chat.controller';
import { MessagesModule } from './messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.HOST,
    port: +process.env.PORT,
    database: process.env.DATABASE,
    username: 'admin',
    password: process.env.PASSWORD,
    synchronize: true,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
    ssl: true
  }), MessagesModule],
  controllers: [AppController, ChatController],
  providers: [AppService],
})
export class AppModule {}
