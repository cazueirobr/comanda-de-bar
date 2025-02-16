import { Module } from '@nestjs/common';
import { CardsService } from './cards/cards.service';
import { CardsController } from './cards/cards.controller';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CardsController, ItemsController],
  providers: [PrismaService, CardsService, ItemsService],
})
export class AppModule {}
