import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DadosSaudeModule } from './dados-saude/dados-saude.module';

@Module({
  imports: [UsuariosModule, DadosSaudeModule],
})
export class AppModule {}

