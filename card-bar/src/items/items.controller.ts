import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { registerItemsDto } from 'src/dtos/registerItemsDto.dto';

@Controller('itens')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}


  @Post(':comandaId')
  create(
    @Param('comandaId') comandaId: number,
    @Body() registerItemsDto: registerItemsDto
  ) {
    return this.itemsService.create(comandaId, registerItemsDto);
  }


  @Get(':comandaId')
  findAll(@Param('comandaId') comandaId: number) {
    return this.itemsService.findAllByComandaId(comandaId);
  }
}
