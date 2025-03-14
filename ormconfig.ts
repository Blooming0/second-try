import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.DB_PORT as any,
  username:  process.env.DB_USERNAME,
  password: '',
  database: process.env.DB_DATABASE,
  // entities: [Episode],
  // autoLoadEntities: true,
  synchronize: true, // todo: not safe for production and we should use migrations instead
  // subscribers: [__dirname + '/domain/subscribers/*.subscriber{.ts,.js}'],
  migrations: ['src/migration/*{.ts,.js}'],
  entities: ['src/**/*.entity{.ts,.js}'],    
};

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();

export default dataSource;

