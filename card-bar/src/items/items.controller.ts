import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Prisma } from '@prisma/client';
import { registerItemsDto } from 'src/dtos/registerItemsDto.dto';
import { updateItemsDto } from 'src/dtos/updateItemsDto.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':cardId')
  findAll(@Param('cardId') cardId: string) {
    return this.itemsService.findAllByCardId(+cardId);
  }

  @Post(':cardId')
  create(@Param('cardId') cardId: string, @Body() data: registerItemsDto) {
    return this.itemsService.create(+cardId, data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: updateItemsDto) {
    return this.itemsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
