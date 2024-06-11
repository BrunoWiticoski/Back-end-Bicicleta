"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidTamanhoAros = void 0;
const class_validator_1 = require("class-validator");
let IsValidTamanhoAros = class IsValidTamanhoAros {
    validate(value, args) {
        const tamanhosDisponiveis = ['ARO 12', 'ARO 16', 'ARO 20', 'ARO 24', 'ARO 26', 'ARO 27,5', 'ARO 29'];
        return tamanhosDisponiveis.includes(value);
    }
    defaultMessage(args) {
        return `O tamanho do aro '${args.value}' não é válido. Os valores válidos são: ARO 12, ARO 16, ARO 20, ARO 24, ARO 26, ARO 27,5, ARO 29`;
    }
};
exports.IsValidTamanhoAros = IsValidTamanhoAros;
exports.IsValidTamanhoAros = IsValidTamanhoAros = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'validarTamanhoAros', async: false })
], IsValidTamanhoAros);
//# sourceMappingURL=validarTamanhoAros.js.map