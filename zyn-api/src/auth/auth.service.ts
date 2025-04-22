import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly dbService: DatabaseService) {}

  async registrar(nome: string, email: string, senha: string) {
    const hash = await bcrypt.hash(senha, 10);
    const db = this.dbService.getConnection();

    await db.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, hash],
    );

    return { message: 'Usuário registrado com sucesso' };
  }

  async login(email: string, senha: string) {
    const db = this.dbService.getConnection();
    const [rows]: any = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    const usuario = rows[0];
    if (!usuario) throw new UnauthorizedException('Email ou senha inválidos');

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) throw new UnauthorizedException('Email ou senha inválidos');

    return {
      message: 'Login realizado com sucesso',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    };
  }
}