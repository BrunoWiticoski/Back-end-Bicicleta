import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class MetaDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  nome: string;

  @IsNumber()
  km: number;

  @IsNumber() 
  tempo: number;

  @IsString()
  media: string;

  data_corrida: Date;

  @IsString()
  observacao: string;
}
