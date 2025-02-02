import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ComandaService } from './comanda.service';
@Controller('comanda')
export class ComandaController {
  constructor(private readonly featureService: ComandaService) {} // Injeção do serviço

  // Método POST para criar um novo item
  @Post()
  @HttpCode(201)
  create(@Body() createItem: any) { // Parâmetro recebido diretamente sem DTO
    return this.featureService.create(createItem);
  }

  // Método GET para listar todos os itens
  @Get()
  findAll() {
    return this.featureService.findAll();
  }

  // Método GET para buscar um item específico pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureService.findOne(id);
  }

  // Método PUT para substituir um item específico pelo ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.featureService.update(id, updateData);
  }

  // Método PATCH para atualizar parcialmente um item pelo ID
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() partialUpdateData: any) {
    return this.featureService.update(id, partialUpdateData);
  }

  // Método DELETE para remover um item específico pelo ID
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.featureService.remove(id);
  }
}
