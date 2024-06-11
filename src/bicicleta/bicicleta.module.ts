import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BicicletaEntity } from './bicicleta.entity';
import { BicicletaService } from './bicicleta.service';
import { BicicletaController } from './bicicleta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BicicletaEntity])],
  controllers: [BicicletaController],
  providers: [BicicletaService],
})
export class BicicletaModule {}
