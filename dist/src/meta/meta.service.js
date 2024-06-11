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
exports.MetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const meta_entity_1 = require("./meta.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bicicleta_entity_1 = require("../bicicleta/bicicleta.entity");
let MetaService = class MetaService {
    constructor(metaRepository, bicicletaRepository) {
        this.metaRepository = metaRepository;
        this.bicicletaRepository = bicicletaRepository;
    }
    findAll() {
        return this.metaRepository.find();
    }
    async findById(id) {
        const findOne = await this.metaRepository.findOne({ where: { id } });
        if (!findOne) {
            throw new common_1.NotFoundException('Meta não encontrado com o id ' + id);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.metaRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto) {
        if (!dto.data_corrida) {
            throw new common_1.BadRequestException('O campo "Data Corrida" é obrigatório.');
        }
        if (!dto.media) {
            throw new common_1.BadRequestException('O campo "media" é obrigatório.');
        }
        const bicicleta = await this.bicicletaRepository.findOne({ where: { nome: dto.nome } });
        if (!bicicleta) {
            throw new common_1.NotFoundException('Não existe uma bicicleta cadastrada com o nome fornecido.');
        }
        const novaMeta = this.metaRepository.create(dto);
        return this.metaRepository.save(novaMeta);
    }
    async update({ id, ...dto }) {
        await this.findById(id);
        return this.metaRepository.save({ id, ...dto });
    }
    async searchAdvanced(params) {
        const queryBuilder = this.metaRepository.createQueryBuilder('meta');
        if (params.data_corrida) {
            queryBuilder.andWhere('meta.data_corrida = :data_corrida', { data_corrida: params.data_corrida });
        }
        if (params.media) {
            queryBuilder.andWhere('meta.media = :media', { media: params.media });
        }
        return queryBuilder.getMany();
    }
};
exports.MetaService = MetaService;
exports.MetaService = MetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(meta_entity_1.MetaEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(bicicleta_entity_1.BicicletaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], MetaService);
//# sourceMappingURL=meta.service.js.map