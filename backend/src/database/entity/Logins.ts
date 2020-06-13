import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Logins extends BaseEntity {
  // id
  @PrimaryGeneratedColumn()
  id_logins: number = 0;

  @Column()
  name: string = '';
  @Column()
  email: string = '';
  @Column()
  password: string = '';
  @Column()
  phone: string = '';
  @Column()
  cpnj: string = '';
  @Column()
  city: string = '';
}
