// users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'João' }];
  }

  @Post()
  create(@Body() user: any) {
    return { message: 'Usuário criado', user };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id, name: 'João' };
  }
}

