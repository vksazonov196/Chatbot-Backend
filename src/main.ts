import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { OpenAI } from "openai";

dotenv.config();


const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export async function sendMessage(message: any) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Explain things like you are a human" },
      { role: "user", content: message }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  app.use(cors());

  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
