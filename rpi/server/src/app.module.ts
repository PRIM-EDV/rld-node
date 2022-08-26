import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

(global as any).WebSocket = require('ws');

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
