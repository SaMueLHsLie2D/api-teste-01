import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly dbService: DatabaseService) {}

  async findById(id: number) {
    const db = this.dbService.getConnection();
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0] || null;
  }
}
