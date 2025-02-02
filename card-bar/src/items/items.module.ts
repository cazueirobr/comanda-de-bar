import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { CardsService } from '../cards/cards.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, CardsService],
})
export class ItemsModule {}
