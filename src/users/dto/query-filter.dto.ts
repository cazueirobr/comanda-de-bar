import { IsOptional, IsString, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryFilterDto {
  @IsOptional()
  @IsString({ message: 'O filtro deve ser uma string válida.' })
  @Transform(({ value }) => value?.trim())
  filter?: string;

  @IsOptional()
  @IsInt({ message: 'A página deve ser um número inteiro.' })
  @Transform(({ value }) => parseInt(value, 10))
  page?: number;
}

