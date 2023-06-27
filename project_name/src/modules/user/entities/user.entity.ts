import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Unique(['email'])
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: String;

  @Column()
  password: string;
}
