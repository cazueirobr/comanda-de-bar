import {IsNotEmpty, IsString} from 'class-validator';

export class updateCardsDto {
  @IsString({message: 'O name deve ser uma string valida'} )
  @IsNotEmpty()
  name: string;
}
