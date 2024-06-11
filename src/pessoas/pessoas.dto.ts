import { IsNotEmpty, IsOptional, IsString, IsUUID, Validate } from 'class-validator';
import { Generos } from './genero.enum';
import { IsValidGenero } from './validarGenero';

export class PessoasDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  data_nascimento: string;

  @IsString()
  @IsOptional()
  @Validate(IsValidGenero)
  generos: Generos;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsNotEmpty()
  cidade: string;
}
