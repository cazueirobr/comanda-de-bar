import { Injectable } from '@nestjs/common';
import { createCardsDto } from 'src/dtos/createCardsDto.dto';
import { updateCardsDto } from 'src/dtos/updateCardsDto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.card.findMany({
      include: { items: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.card.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  async create(data: createCardsDto) {
    return this.prisma.card.create({
      data,
    });
  }

  async update(id: number, data: updateCardsDto) {
    return this.prisma.card.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.card.delete({
      where: { id },
    });
  }
}
