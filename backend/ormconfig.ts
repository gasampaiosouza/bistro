import path from 'path';
require('dotenv').config();

export = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  entities: [path.join('src', 'database', 'entity', '**', '*.ts')],
  migrations: [path.join('src', 'database', 'migrations', '*.ts')],
  subscribers: [path.join('src', 'database', 'subscriber', '**', '*.ts')],
  cli: {
    migrationsDir: path.join('src', 'database', 'migrations'),
    entitiesDir: path.join('src', 'database', 'entity'),
    subscribersDir: path.join('src', 'database', 'subscriber'),
  },

  synchronize: true,
}

