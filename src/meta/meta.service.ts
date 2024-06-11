import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MetaEntity } from './meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaDto } from './meta.dto';
import { BicicletaEntity } from 'src/bicicleta/bicicleta.entity';

@Injectable()
export class MetaService {
  constructor(
    @InjectRepository(MetaEntity)
    private metaRepository: Repository<MetaEntity>,
    @InjectRepository(BicicletaEntity)
    private bicicletaRepository: Repository<BicicletaEntity>,
  ) {}

  findAll() {
    return this.metaRepository.find();
  }

  async findById(id: string): Promise<MetaEntity> {
    const findOne = await this.metaRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Meta não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.metaRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: MetaDto) {
      // primeira regra de negocio
    if (!dto.data_corrida) {
      throw new BadRequestException('O campo "Data Corrida" é obrigatório.');
    }

      // segunda regra de negocio
    if (!dto.media) {
      throw new BadRequestException('O campo "media" é obrigatório.');
    }

      // terceira regra de negocio
    const bicicleta = await this.bicicletaRepository.findOne({ where: { nome: dto.nome } });
    if (!bicicleta) {
      throw new NotFoundException('Não existe uma bicicleta cadastrada com o nome fornecido.');
    }

    const novaMeta = this.metaRepository.create(dto);
    return this.metaRepository.save(novaMeta);
  }

  async update({ id, ...dto }: MetaDto) {
    await this.findById(id);
    return this.metaRepository.save({ id, ...dto });
  }

      //abaixo segue um diferencial, aqui adicionei suporte para filtrar por data_corrida e media.
  async searchAdvanced(params: any) {
    const queryBuilder = this.metaRepository.createQueryBuilder('meta');

    if (params.data_corrida) {
      queryBuilder.andWhere('meta.data_corrida = :data_corrida', { data_corrida: params.data_corrida });
    }

    if (params.media) {
      queryBuilder.andWhere('meta.media = :media', { media: params.media });
    }

    return queryBuilder.getMany();
  }
}
