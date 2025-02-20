import {IsNotEmpty, IsString} from 'class-validator';

export class createCardsDto {
  @IsString({message: 'O name deve ser uma string valida'} )
  @IsNotEmpty()
  name: string;
}
