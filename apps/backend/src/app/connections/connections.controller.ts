import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConnectionsService } from './connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Get()
  getConnectionCount() {
    return this.connectionsService.getAllConnections();
  }

  @Post()
  createConnection(@Body('user_id') userId: string) {
    return this.connectionsService.createConnection(userId);
  }
}
