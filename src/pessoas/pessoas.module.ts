import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasEntity } from './pessoas.entity';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PessoasEntity])],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
