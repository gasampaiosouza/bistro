import { getManager } from "typeorm"

const connection = (dbname:string)=>{
  return getManager().getRepository(dbname)
}

export default connection;