import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'Password',
      database: 'zyn_app_db',
      waitForConnections: true,
      connectionLimit: 10,
    });
  }

  getConnection() {
    return this.pool;
  }
}