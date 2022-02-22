"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '12345',
    database: 'app',
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=db.config.js.map