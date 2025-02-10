import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { createCardsDto } from 'src/dtos/createCardsDto.dto';

@Controller('cards')
export class CardsController {
    constructor(private readonly CardsService: CardsService) {}

    @Get()
    findAll() {
      return this.CardsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.CardsService.findOne(+id);
    }
  
    @Post()
    create(@Body() createCardsDto: createCardsDto) {
      return this.CardsService.create(createCardsDto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() body: { client: string }) {
      return this.CardsService.update(+id, body);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.CardsService.remove(+id);
    }
}
