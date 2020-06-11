import {Entity,Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export default class Stocks extends BaseEntity{

  @PrimaryGeneratedColumn()
  id_stocks: number=0;

  @Column({length: 30})
  product_name:string='';
}

