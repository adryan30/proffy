import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User, ClassSchedule } from './entities';

@Entity({ name: 'classes' })
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  cost: number;

  @ManyToOne(() => User, (entity) => entity.classes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(() => ClassSchedule, (entity) => entity.class)
  schedules: ClassSchedule[];
}
