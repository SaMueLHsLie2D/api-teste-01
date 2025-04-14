import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { DadosSaudeService } from './dados-saude.service';

@Controller('usuarios/:id/dados-saude')
export class DadosSaudeController {
  constructor(private readonly dadosSaudeService: DadosSaudeService) {}

  @Post()
  async adicionar(@Param('id') id: number, @Body() body: any) {
    await this.dadosSaudeService.adicionarRegistro(
      Number(id),
      body.peso,
      body.gordura_corporal
    );
    return { message: 'Registro adicionado com sucesso' };
  }

  @Get()
  async listar(@Param('id') id: number) {
    return this.dadosSaudeService.obterHistorico(Number(id));
  }

  @Get('/progresso')
  async progresso(@Param('id') id: number) {
    const progresso = await this.dadosSaudeService.calcularProgresso(Number(id));
    if (!progresso) throw new NotFoundException('Registros insuficientes');
    return progresso;
  }
}
