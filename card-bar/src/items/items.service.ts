import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { registerItemsDto } from 'src/dtos/registerItemsDto.dto';
import { updateItemsDto } from 'src/dtos/updateItemsDto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAllByCardId(cardId: number) {
    return this.prisma.item.findMany({
      where: { cardId },
    });
  }

  async create(cardId: number, data: registerItemsDto) {
    return this.prisma.item.create({
      data: { ...data, card: { connect: { id: cardId } } },
    });
  }

  async update(id: number, data: updateItemsDto) {
    return this.prisma.item.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
