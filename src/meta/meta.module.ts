import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaEntity } from './meta.entity';
import { MetaService } from './meta.service';
import { MetaController } from './meta.controller';
import { BicicletaEntity } from '../bicicleta/bicicleta.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([MetaEntity, BicicletaEntity]), 
  ],
  controllers: [MetaController],
  providers: [MetaService],
})
export class MetaModule {}
