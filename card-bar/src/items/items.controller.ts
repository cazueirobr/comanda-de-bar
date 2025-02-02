import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('itens')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // Rota para adicionar um item à comanda
  @Post(':comandaId')
  create(
    @Param('comandaId') comandaId: number,
    @Body() body: { name: string; price: number; quantity: number },
  ) {
    return this.itemsService.create(comandaId, body);
  }

  // Rota para listar todos os itens de uma comanda
  @Get(':comandaId')
  findAll(@Param('comandaId') comandaId: number) {
    return this.itemsService.findAllByComandaId(comandaId);
  }
}
