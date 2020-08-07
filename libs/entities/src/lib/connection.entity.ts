import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './entities';

@Entity({ name: 'connections' })
export class Connection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (entity) => entity.connections, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @CreateDateColumn({ nullable: false, default: new Date() })
  created_at: Date;
}
