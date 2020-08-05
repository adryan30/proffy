import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Class, ClassSchedule } from '@nlw2/entities';

import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Class, ClassSchedule])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
