import { Injectable, Inject, OnModuleInit, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('PONG_CLIENT') private readonly client: ClientProxy) {}

  onModuleInit() {
    this.client.connect();
  }

  ping(): void {
    Logger.debug('ping', 'emit');
    this.client.emit('notify', { notification: 'pong' });
  }
}
