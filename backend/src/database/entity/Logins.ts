import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Logins extends BaseEntity {
  // id
  @PrimaryGeneratedColumn()
  id_logins: number = 0;

  @Column()
  email: string = '';
  @Column()
  password: string = '';
}
