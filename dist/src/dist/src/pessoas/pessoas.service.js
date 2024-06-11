"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const pessoas_entity_1 = require("./pessoas.entity");
const typeorm_2 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
let PessoasService = class PessoasService {
    constructor(pessoasRepository) {
        this.pessoasRepository = pessoasRepository;
    }
    findAll() {
        return this.pessoasRepository.find();
    }
    async findById(id) {
        const findOne = await this.pessoasRepository.findOne({ where: { id } });
        if (!findOne) {
            throw new common_1.NotFoundException('Pessoa não encontrado com o id ' + id);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.pessoasRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto) {
        dto.cpf = dto.cpf.replace(/[^\d]/g, '');
        const pessoaComCpfExistente = await this.pessoasRepository.findOne({ where: { cpf: dto.cpf } });
        if (pessoaComCpfExistente) {
            throw new common_1.BadRequestException('O CPF inserido já está em uso.');
        }
        const pessoaExistente = await this.pessoasRepository.findOne({ where: { nome: dto.nome } });
        if (pessoaExistente) {
            throw new common_1.BadRequestException('O nome inserido já está em uso.');
        }
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const novaPessoa = this.pessoasRepository.create(dto);
        return this.pessoasRepository.save(novaPessoa);
    }
    async update({ id, ...dto }) {
        if (dto.cpf) {
            dto.cpf = dto.cpf.replace(/[^\d]/g, '');
        }
        if (dto.telefone) {
            dto.telefone = dto.telefone.replace(/[^\d]/g, '');
        }
        const pessoaExistente = await this.pessoasRepository.findOne({ where: { nome: dto.nome } });
        if (pessoaExistente && pessoaExistente.id !== id) {
            throw new common_1.BadRequestException('O nome inserido já está em uso.');
        }
        await this.findById(id);
        return this.pessoasRepository.save({ id, ...dto });
    }
    async searchAdvanced(params) {
        const queryBuilder = this.pessoasRepository.createQueryBuilder('pessoa');
        if (params.nome) {
            queryBuilder.andWhere('pessoa.nome = :nome', { nome: params.nome });
        }
        if (params.cpf) {
            queryBuilder.andWhere('pessoa.cpf = :cpf', { cpf: params.cpf });
        }
        return queryBuilder.getMany();
    }
};
exports.PessoasService = PessoasService;
exports.PessoasService = PessoasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(pessoas_entity_1.PessoasEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PessoasService);
//# sourceMappingURL=pessoas.service.js.map