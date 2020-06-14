import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import StocksMovements from './StocksMovements';

@Entity()
export default class Stocks{
  
  @PrimaryGeneratedColumn()
  id_stocks: number | undefined;

  @Column({type:'varchar', length: 30, nullable:false})
  product_name: string | undefined;

  @OneToMany(type=>StocksMovements, stockMovementing=> stockMovementing.id_stock)
  stock_movement!: StocksMovements[];
}

