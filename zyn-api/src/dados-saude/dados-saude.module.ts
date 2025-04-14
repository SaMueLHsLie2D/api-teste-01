import { Module } from '@nestjs/common';
import { DadosSaudeService } from './dados-saude.service';
import { DadosSaudeController } from './dados-saude.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DadosSaudeController],
  providers: [DadosSaudeService],
})
export class DadosSaudeModule {}
