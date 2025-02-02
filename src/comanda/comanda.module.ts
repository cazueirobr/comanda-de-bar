import { Module } from '@nestjs/common';
import { ComandaController } from './comanda.controller';
import { ComandaService } from './comanda.service';

@Module({
  controllers: [ComandaController],
  providers: [ComandaService]
})
export class ComandaModule {}
