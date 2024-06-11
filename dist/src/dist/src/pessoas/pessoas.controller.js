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
exports.PessoasController = void 0;
const common_1 = require("@nestjs/common");
const pessoas_service_1 = require("./pessoas.service");
const pessoas_dto_1 = require("./pessoas.dto");
const class_validator_1 = require("class-validator");
let PessoasController = class PessoasController {
    constructor(pessoasService) {
        this.pessoasService = pessoasService;
    }
    async findAll() {
        return this.pessoasService.findAll();
    }
    async findById(id) {
        return this.pessoasService.findById(id);
    }
    async remove(id) {
        return this.pessoasService.remove(id);
    }
    async create(dto) {
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        return this.pessoasService.create(dto);
    }
    update(id, dto) {
        return this.pessoasService.update({ id, ...dto });
    }
};
exports.PessoasController = PessoasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoasController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoasController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pessoas_dto_1.PessoasDto]),
    __metadata("design:returntype", Promise)
], PessoasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pessoas_dto_1.PessoasDto]),
    __metadata("design:returntype", void 0)
], PessoasController.prototype, "update", null);
exports.PessoasController = PessoasController = __decorate([
    (0, common_1.Controller)('pessoas'),
    __metadata("design:paramtypes", [pessoas_service_1.PessoasService])
], PessoasController);
//# sourceMappingURL=pessoas.controller.js.map