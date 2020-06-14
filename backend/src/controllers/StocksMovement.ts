import { Request, Response, response } from 'express';
import connection from './../database/connection';
import StocksMovements from "../database/entity/StocksMovements";
import { createQueryBuilder } from "typeorm";


interface StocksMovemented {
  id_stock_movement:number,
  id_stock:number
  place:string,
  buy_date: Date,
  price: number,
  quantity: number,
  total_quantity: number,
}
class StocksMovementsController {
  async index(req:Request, res: Response){
    
    const filter = new Map()
    Object.entries(req.query).map(entry =>{
      if(entry[1])
      {
        if(entry[0]==="product_name"){
          entry[0] = `stocks.${entry[0]}`
          filter.set(entry[0],entry[1])
        }
        else{
          entry[0]=`stocks_movements.${entry[0]}`
          filter.set(entry[0],entry[1])
        }
      }
    })
    
    try {
      if(filter.size)
      {
        let sql = 'SELECT * FROM "stocks_movements" INNER JOIN "stocks" on'+
        ' "stocks"."id_stocks"="stocks_movements"."id_stock" WHERE ';
        filter.forEach((value,key)=>(sql+=`${key}='${value}' AND `))
        sql= sql.substr(0, sql.length-4)+';'
        connection('StocksMovements').query(sql).
        then(response=>(res.status(200).json(response)))      
      }
      else{
        const stocksMovementsList = await connection('StocksMovements').find().
        then(response=>res.status(200).json(response))
      }
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }
  async create(req:Request, res: Response){
    const  stocksMovementExists = <StocksMovemented> await connection('StocksMovements')
    .createQueryBuilder("stock_movement").orderBy("stock_movement.id_stock").getOne()

    try {
      if (!stocksMovementExists){
        const elements = {...req.body,total_quantity:req.body.quantity}
        const stocksMovement = new  StocksMovements(elements);
        await connection('StocksMovements').save(stocksMovement).then(response =>{
          return res.status(200).json(response)
        })
      }
      else{
        const elements = {...req.body,total_quantity:stocksMovementExists.
          total_quantity+req.body.quantity}
          const stocksMovement = new  StocksMovements(elements);
          await connection('StocksMovements').save(stocksMovement).then(response =>{
            return res.status(200).json(response)
          })
      }
    } catch (error) {
      return res.status(404).json({error:error.message})
    }
  }
}

export default new StocksMovementsController()