import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Class, Connection } from './entities';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  avatar: string;

  @Column({ nullable: false })
  whatsapp: string;

  @Column({ nullable: false })
  bio: string;

  @OneToMany(() => Class, (entity) => entity.user)
  classes: Class[];

  @OneToMany(() => Connection, (entity) => entity.user)
  connections: Class[];
}
