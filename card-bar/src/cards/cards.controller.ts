import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Prisma } from '@prisma/client';
import { createCardsDto } from 'src/dtos/createCardsDto.dto';
import { updateCardsDto } from 'src/dtos/updateCardsDto.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(+id);
  }

  @Post()
  create(@Body() data: createCardsDto) {
    return this.cardsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: updateCardsDto) {
    return this.cardsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
