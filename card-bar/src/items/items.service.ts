import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items = [
    { comandaId: 1, name: 'Caipirinha', price: 20, quantity: 2 },
    { comandaId: 1, name: 'Cerveja', price: 10, quantity: 1 },
  ];

  create(comandaId: number, item: { name: string; price: number; quantity: number }) {
    const newItem = { ...item, comandaId };
    this.items.push(newItem);
    return newItem;
  }

  findAllByComandaId(comandaId: number) {
    return this.items.filter(item => item.comandaId === comandaId);
  }
}
