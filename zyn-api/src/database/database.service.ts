import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection: mysql.Connection;

  async onModuleInit() {
    this.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Password',
      database: 'zyn_app_db',
    });
  }

  getConnection(): mysql.Connection {
    return this.connection;
  }
}