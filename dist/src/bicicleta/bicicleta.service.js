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
exports.BicicletaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bicicleta_entity_1 = require("./bicicleta.entity");
const typeorm_2 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
let BicicletaService = class BicicletaService {
    constructor(bicicletaRepository) {
        this.bicicletaRepository = bicicletaRepository;
    }
    async findAll() {
        return this.bicicletaRepository.find();
    }
    async findById(id) {
        const findOne = await this.bicicletaRepository.findOne({ where: { id } });
        if (!findOne) {
            throw new common_1.NotFoundException('Bicicleta não encontrada com o id ' + id);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.bicicletaRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto) {
        const { chassi, codntf } = dto;
        const existingBicicletaByChassi = await this.bicicletaRepository.findOne({ where: { chassi } });
        if (existingBicicletaByChassi) {
            throw new common_1.BadRequestException(`Já existe uma bicicleta cadastrada com o número de chassi '${chassi}'`);
        }
        if (codntf.length !== 44) {
            throw new common_1.BadRequestException('O código NTF deve ter exatamente 44 caracteres');
        }
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const newBicicleta = this.bicicletaRepository.create(dto);
        return this.bicicletaRepository.save(newBicicleta);
    }
    async update(id, dto) {
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        await this.findById(id);
        return this.bicicletaRepository.save({ id, ...dto });
    }
    async searchAdvanced(params) {
        const queryBuilder = this.bicicletaRepository.createQueryBuilder('bicicleta');
        if (params.modelo) {
            queryBuilder.andWhere('bicicleta.modelo = :modelo', { modelo: params.modelo });
        }
        if (params.cor) {
            queryBuilder.andWhere('bicicleta.cor = :cor', { cor: params.cor });
        }
        return queryBuilder.getMany();
    }
};
exports.BicicletaService = BicicletaService;
exports.BicicletaService = BicicletaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bicicleta_entity_1.BicicletaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BicicletaService);
//# sourceMappingURL=bicicleta.service.js.map