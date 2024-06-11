"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicicletaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bicicleta_entity_1 = require("./bicicleta.entity");
const bicicleta_service_1 = require("./bicicleta.service");
const bicicleta_controller_1 = require("./bicicleta.controller");
let BicicletaModule = class BicicletaModule {
};
exports.BicicletaModule = BicicletaModule;
exports.BicicletaModule = BicicletaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bicicleta_entity_1.BicicletaEntity])],
        controllers: [bicicleta_controller_1.BicicletaController],
        providers: [bicicleta_service_1.BicicletaService],
    })
], BicicletaModule);
//# sourceMappingURL=bicicleta.module.js.map