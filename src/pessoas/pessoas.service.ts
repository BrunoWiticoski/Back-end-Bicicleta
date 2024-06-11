import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PessoasEntity } from './pessoas.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoasDto } from './pessoas.dto';
import { Generos } from './genero.enum'; 
import { validate } from 'class-validator';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(PessoasEntity)
    private pessoasRepository: Repository<PessoasEntity>,
  ) {}

  findAll() {
    return this.pessoasRepository.find();
  }

  async findById(id: string): Promise<PessoasEntity> {
    const findOne = await this.pessoasRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Pessoa não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.pessoasRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: PessoasDto) {
    dto.cpf = dto.cpf.replace(/[^\d]/g, '');
    
      //primeira regra de negocio
    const pessoaComCpfExistente = await this.pessoasRepository.findOne({ where: { cpf: dto.cpf } });
    if (pessoaComCpfExistente) {
      throw new BadRequestException('O CPF inserido já está em uso.');
    }
    
      //segunda regra de negocio
    const pessoaExistente = await this.pessoasRepository.findOne({ where: { nome: dto.nome } });
    if (pessoaExistente) {
      throw new BadRequestException('O nome inserido já está em uso.');
    }
    
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const novaPessoa = this.pessoasRepository.create(dto);
    return this.pessoasRepository.save(novaPessoa);
  }

  async update({ id, ...dto }: PessoasDto) {
    if (dto.cpf) {
      dto.cpf = dto.cpf.replace(/[^\d]/g, '');
    }
    
    if (dto.telefone) {
      dto.telefone = dto.telefone.replace(/[^\d]/g, '');
    }

    const pessoaExistente = await this.pessoasRepository.findOne({ where: { nome: dto.nome } });
    if (pessoaExistente && pessoaExistente.id !== id) {
      throw new BadRequestException('O nome inserido já está em uso.');
    }
    
    await this.findById(id);
    return this.pessoasRepository.save({ id, ...dto });
  }

    //abaixo segue um diferencial, aqui adicionei suporte para filtrar por nome e cpf.
  async searchAdvanced(params: any) {
    const queryBuilder = this.pessoasRepository.createQueryBuilder('pessoa');

    if (params.nome) {
      queryBuilder.andWhere('pessoa.nome = :nome', { nome: params.nome });
    }

    if (params.cpf) {
      queryBuilder.andWhere('pessoa.cpf = :cpf', { cpf: params.cpf });
    }

    return queryBuilder.getMany();
  }
}
