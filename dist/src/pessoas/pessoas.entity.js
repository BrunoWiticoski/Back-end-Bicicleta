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
exports.PessoasEntity = void 0;
const typeorm_1 = require("typeorm");
const genero_enum_1 = require("./genero.enum");
let PessoasEntity = class PessoasEntity {
};
exports.PessoasEntity = PessoasEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PessoasEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "data_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: genero_enum_1.Generos,
        nullable: false,
    }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "generos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 44 }),
    __metadata("design:type", String)
], PessoasEntity.prototype, "cidade", void 0);
exports.PessoasEntity = PessoasEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pessoas' }),
    (0, typeorm_1.Unique)(['nome'])
], PessoasEntity);
//# sourceMappingURL=pessoas.entity.js.map