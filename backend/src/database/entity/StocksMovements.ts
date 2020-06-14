import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, PrimaryColumn, JoinColumn} from "typeorm";
import Stocks from './Estoques'

interface stockMovement{
  id_stock: number;
  place: string | undefined;
  buy_date:Date 
  price: number
  quantity: number
  total_quantity:number
}
@Entity()
export default class StocksMovements {
  @PrimaryGeneratedColumn()
  id_stock_movement: number | undefined;
  
  @ManyToOne(type => Stocks, stock => stock.stock_movement)
  @JoinColumn({ name: "id_stock" })
  id_stock!: Stocks ;

  @Column({type:'varchar', length: 30, nullable:false})
  place: string | undefined;

  @Column({type:'date', nullable:false})
  buy_date:Date | undefined;

  @Column({type:'float',nullable:false})
  price: number | undefined

  @Column({type:"int", nullable:false})
  quantity: number | undefined

  @Column({type:"int",nullable:false})
  total_quantity:number | undefined

  constructor (params: stockMovement){
    Object.assign(this, params)
  }
}