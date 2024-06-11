import { IsNotEmpty, IsOptional, IsString, IsUUID, Validate } from 'class-validator';
import { TamanhoArosEnum } from './aros.enum';
import { IsValidTamanhoAros } from './validarTamanhoAros';

export class BicicletaDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString() 
  @IsOptional()
  @Validate(IsValidTamanhoAros) 
  tamanhoaros: TamanhoArosEnum;

  @IsNotEmpty()
  chassi: string;

  @IsString()
  @IsNotEmpty()
  cor: string;

  @IsNotEmpty()
  codntf: string;
}
