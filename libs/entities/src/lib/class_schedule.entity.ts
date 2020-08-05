import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Class } from './entities';

@Entity({ name: 'class_schedule' })
export class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  week_day: number;

  @Column({ nullable: false })
  from: number;

  @Column({ nullable: false })
  to: number;

  @ManyToOne(() => Class, (entity) => entity.schedules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  class: Class;
}
