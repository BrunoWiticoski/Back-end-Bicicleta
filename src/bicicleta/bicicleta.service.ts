import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BicicletaEntity } from './bicicleta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BicicletaDto } from './bicicleta.dto';
import { validate } from 'class-validator';


@Injectable()
export class BicicletaService {
  constructor(
    @InjectRepository(BicicletaEntity)
    private bicicletaRepository: Repository<BicicletaEntity>,
  ) {}

  async findAll() {
    return this.bicicletaRepository.find();
  }

  async findById(id: string): Promise<BicicletaEntity> {
    const findOne = await this.bicicletaRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Bicicleta não encontrada com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.bicicletaRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: BicicletaDto) {
    const {  chassi, codntf  } = dto;
    const existingBicicletaByChassi = await this.bicicletaRepository.findOne({ where: { chassi } });
    //primeira regra de negócio
    if (existingBicicletaByChassi) {
      throw new BadRequestException(`Já existe uma bicicleta cadastrada com o número de chassi '${chassi}'`);
    }

    //segunda regra de negocio
    if (codntf.length !== 44) {
      throw new BadRequestException('O código NTF deve ter exatamente 44 caracteres');
    }

    //terceira regra de negócio está separa, arquivo validarTamanhoAros.ts

    //10/06/2024 - OBS: para próxima etapa, adicionar regra de negocio para que não deixe criar cadastro de bicicleta com nome de pessoa que não existe cadastrada;

    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const newBicicleta = this.bicicletaRepository.create(dto);
    return this.bicicletaRepository.save(newBicicleta);
  }

  async update(id: string, dto: BicicletaDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    await this.findById(id);
    return this.bicicletaRepository.save({ id, ...dto });
  }

  //abaixo segue um diferencial, aqui adicionei suporte para filtrar por modelo e cor.
  async searchAdvanced(params: any) {
    const queryBuilder = this.bicicletaRepository.createQueryBuilder('bicicleta');

    if (params.modelo) {
      queryBuilder.andWhere('bicicleta.modelo = :modelo', { modelo: params.modelo });
    }

    if (params.cor) {
      queryBuilder.andWhere('bicicleta.cor = :cor', { cor: params.cor });
    }

    return queryBuilder.getMany();
  }
}
