import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class updateItemsDto {
  @IsOptional()
  @IsString({message: 'O name deve ser uma string valida'} )
  name: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: 'O valor deve ser um número válido.' })
  price: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: 'A quantidade deve ser um número válido.' })
  quantity: number;
}
