import Stocks from "../database/entity/Estoques";
import { Response, Request } from "express";
import { getConnection } from "typeorm";

class EstoquesController{
  async index( req: Request, res: Response){
    const {name} = req.query;
    
  }

  async create( req: Request, res: Response){
    const {product_name} = req.body;
    
    const  newStocks = new Stocks()
    newStocks.product_name = product_name;
    try{
      await newStocks.save()
      return res.status(200).json(newStocks)
    } catch(error){
      return res.status(400).json({error: error.message})
    }
  }
}

export default new EstoquesController();