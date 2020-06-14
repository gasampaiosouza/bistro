import Stocks from "../database/entity/Estoques";
import { Response, Request } from "express";
import connection from './../database/connection';
class EstoquesController{
  async index( req: Request, res: Response){
    const {product_name} = req.query;
    try {
      const resultados=  product_name?await connection('Stocks').find({product_name:product_name}):
      await connection('Stocks').find();
      return res.status(200).json(resultados)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  }

  async create( req: Request, res: Response){
    const {product_name} = req.body;
    
    try{
      const  newStocks = new Stocks()
      newStocks.product_name = product_name
      await connection('Stocks').save(newStocks).then(response =>{
        return res.status(200).json(response)
      })
      
    } catch(error){
      return res.status(400).json({error: error.message})
    }
  }
}

export default new EstoquesController();