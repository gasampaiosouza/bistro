import express from 'express';
import cors from 'cors'
import routes from './routes';
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm';


let app = async () => {
  const app = express();
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions)
  BaseEntity.useConnection(connection)
  app.use(cors());
  app.use(express.json())
  app.use(routes)
  app.listen(5000)
}

app()