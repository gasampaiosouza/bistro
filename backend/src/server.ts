import express from 'express';
import cors from 'cors'
import routes from './routes';
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm';


createConnection().then(async connection =>{
  const app = express();
  app.use(cors());
  app.use(express.json())
  app.use(routes)
  app.listen(5000)
});