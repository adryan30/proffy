import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, User } from '@nlw2/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ConnectionsService {
  constructor(
    @InjectRepository(Connection)
    private readonly connectionsRepository: Repository<Connection>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async createConnection(userId: string) {
    const user = await this.usersRepository.findOne(userId);

    return this.connectionsRepository.save({ user });
  }

  async getAllConnections() {
    const [, count] = await this.connectionsRepository.findAndCount();
    return { totalConnections: count };
  }
}
