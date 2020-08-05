import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';

import { environment } from '../environments/environment';
import { ConnectionsModule } from './connections/connections.module';
const { db } = environment;

@Module({
  imports: [TypeOrmModule.forRoot(db), ClassesModule, ConnectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
