import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class DadosSaudeService {
  constructor(private readonly dbService: DatabaseService) {}

  async adicionarRegistro(usuarioId: number, peso: number, gordura: number) {
    const db = this.dbService.getConnection();
    await db.execute(
      'INSERT INTO dados_saude (usuario_id, peso, gordura_corporal) VALUES (?, ?, ?)',
      [usuarioId, peso, gordura]
    );
  }

  async obterHistorico(usuarioId: number) {
    const db = this.dbService.getConnection();
    const [rows] = await db.execute(
      'SELECT * FROM dados_saude WHERE usuario_id = ? ORDER BY data_registro ASC',
      [usuarioId]
    );
    return rows;
  }

  async calcularProgresso(usuarioId: number) {
    const historico = (await this.obterHistorico(usuarioId)) as any[];
    if (historico.length < 2) return null;

    const inicial = historico[0];
    const atual = historico[historico.length - 1];

    return {
      peso: atual.peso - inicial.peso,
      gordura_corporal: atual.gordura_corporal - inicial.gordura_corporal,
    };
  }
}