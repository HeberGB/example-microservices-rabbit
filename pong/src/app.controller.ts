import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('notify')
  async handleUserCreated(data: Record<string, unknown>) {
    Logger.log(data, 'Response');
  }
}
