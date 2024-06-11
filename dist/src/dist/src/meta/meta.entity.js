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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const bicicleta_entity_1 = require("../bicicleta/bicicleta.entity");
let MetaEntity = class MetaEntity {
};
exports.MetaEntity = MetaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MetaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], MetaEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MetaEntity.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MetaEntity.prototype, "tempo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], MetaEntity.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'data_corrida', nullable: true }),
    __metadata("design:type", Date)
], MetaEntity.prototype, "data_corrida", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], MetaEntity.prototype, "observacao", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => bicicleta_entity_1.BicicletaEntity, bicicleta => bicicleta.metas),
    (0, typeorm_1.JoinTable)({
        name: 'bicicletas_metas',
        joinColumn: { name: 'meta_id' },
        inverseJoinColumn: { name: 'bicicleta_id' },
    }),
    __metadata("design:type", Array)
], MetaEntity.prototype, "bicicletas", void 0);
exports.MetaEntity = MetaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'metas' })
], MetaEntity);
//# sourceMappingURL=meta.entity.js.map