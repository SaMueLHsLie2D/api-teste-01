import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get(':id')
  async getUsuario(@Param('id') id: number) {
    const user = await this.usuariosService.findById(Number(id));
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }
}
