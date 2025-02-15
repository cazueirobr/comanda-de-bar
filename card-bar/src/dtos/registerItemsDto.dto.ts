import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class registerItemsDto {
  @IsString({message: 'O name deve ser uma string valida'} )
  @IsNotEmpty()
  name: string;

  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: 'O valor deve ser um número válido.' })
  @IsNotEmpty()
  price: number;

  @Transform(({ value }) => Number(value))
  @IsNumber({}, { message: 'A quantidade deve ser um número válido.' })
  @IsNotEmpty()
  quantity: number;
}
