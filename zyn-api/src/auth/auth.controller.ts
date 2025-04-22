import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registro')
  async registrar(@Body() body: any) {
    const { nome, email, senha } = body;
    return this.authService.registrar(nome, email, senha);
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, senha } = body;
    return this.authService.login(email, senha);
  }
}
