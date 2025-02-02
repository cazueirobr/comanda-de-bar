import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module'; // Importando o módulo de itens
import { CardsModule } from './cards/cards.module'; // Importando o módulo de cards

@Module({
  imports: [CardsModule, ItemsModule],  // Adicionando os módulos de cards e itens
})
export class AppModule {}
