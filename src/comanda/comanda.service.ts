import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ComandaService {
  private items = []; // Armazena a lista de itens em memória

  // Método para criar um novo item
  create(item) {
    this.items.push(item);
    return item;
  }

  // Método para listar todos os itens
  findAll() {
    return this.items;
  }

  // Método para encontrar um item específico pelo ID
  findOne(id: string) {
    const item = this.items.find(item => item.id === id);
    if (!item) throw new NotFoundException('Item não encontrado');
    return item;
  }

  // Método para atualizar um item específico pelo ID
  update(id: string, updateData) {
    const item = this.findOne(id);
    Object.assign(item, updateData);
    return item;
  }

  // Método para remover um item específico pelo ID
  remove(id: string) {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) throw new NotFoundException('Item não encontrado');
    this.items.splice(index, 1);
  }
}

