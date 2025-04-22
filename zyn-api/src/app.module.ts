import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DadosSaudeModule } from './dados-saude/dados-saude.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UsuariosModule, DadosSaudeModule, DatabaseModule],
})
export class AppModule {}
