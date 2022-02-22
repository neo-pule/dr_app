import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '12345',
    database: 'app',
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  }