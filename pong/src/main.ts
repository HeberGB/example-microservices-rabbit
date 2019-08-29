import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://develop:rabbitqueue@rabbitmq:5672`],
      queue: 'push_notifications',
      queueOptions: { durable: true },
    },
  });
  await app.listen(() => Logger.log('Microservice is listening'));
}
bootstrap();
