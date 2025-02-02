import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  // Aqui temos um armazenamento simples de itens e suas respectivas comandas
  private items = [
    { comandaId: 1, name: 'Caipirinha', price: 20, quantity: 2 },
    { comandaId: 1, name: 'Cerveja', price: 10, quantity: 1 },
  ];

  // Adiciona um item a uma comanda
  create(comandaId: number, item: { name: string; price: number; quantity: number }) {
    const newItem = { ...item, comandaId };
    this.items.push(newItem);
    return newItem;
  }

  // Lista todos os itens de uma comanda
  findAllByComandaId(comandaId: number) {
    return this.items.filter(item => item.comandaId === comandaId);
  }
}
