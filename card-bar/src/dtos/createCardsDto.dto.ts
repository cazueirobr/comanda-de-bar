import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createCardsDto {
  @IsString({message: 'O client deve ser uma string valida'} )
  @IsNotEmpty()
  client: string;
}
