import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
  private cards = [
    { id: 1, client: 'Matheus' },
    { id: 2, client: 'Carlos' },
  ];

  findAll() {
    return this.cards;
  }

  findOne(id: number) {
    return this.cards.find(card => card.id === id);
  }

  create(card: { client: string }) {
    const newCard = { id: this.cards.length + 1, ...card };
    this.cards.push(newCard);
    return newCard;
  }

  update(id: number, cardUpdates: { client: string }) {
    const cardIndex = this.cards.findIndex(card => card.id === id);
    if (cardIndex === -1) {
      return `Comanda com ID ${id} não encontrada`;
    }
    this.cards[cardIndex] = { ...this.cards[cardIndex], ...cardUpdates };
    return this.cards[cardIndex];
  }

  remove(id: number) {
    const cardIndex = this.cards.findIndex(card => card.id === id);
    if (cardIndex === -1) {
      return `Comanda com ID ${id} não encontrada`;
    }
    this.cards.splice(cardIndex, 1);
    return `Comanda com ID ${id} removida com sucesso!`;
  }
}
