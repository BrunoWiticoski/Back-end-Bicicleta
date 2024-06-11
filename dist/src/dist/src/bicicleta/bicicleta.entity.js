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
exports.BicicletaEntity = void 0;
const typeorm_1 = require("typeorm");
const aros_enum_1 = require("./aros.enum");
const meta_entity_1 = require("../meta/meta.entity");
let BicicletaEntity = class BicicletaEntity {
};
exports.BicicletaEntity = BicicletaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: aros_enum_1.TamanhoArosEnum,
        nullable: false,
    }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "tamanhoaros", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "chassi", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "cor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 44 }),
    __metadata("design:type", String)
], BicicletaEntity.prototype, "codntf", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => meta_entity_1.MetaEntity, meta => meta.bicicletas),
    (0, typeorm_1.JoinTable)({
        name: 'bicicletas_metas',
        joinColumn: { name: 'bicicleta_id' },
        inverseJoinColumn: { name: 'meta_id' },
    }),
    __metadata("design:type", Array)
], BicicletaEntity.prototype, "metas", void 0);
exports.BicicletaEntity = BicicletaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'bicicletas' }),
    (0, typeorm_1.Unique)(['nome'])
], BicicletaEntity);
//# sourceMappingURL=bicicleta.entity.js.map