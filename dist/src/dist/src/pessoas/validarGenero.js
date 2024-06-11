"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidGenero = void 0;
const class_validator_1 = require("class-validator");
let IsValidGenero = class IsValidGenero {
    validate(value, args) {
        const generosDisponiveis = ['F', 'M'];
        return generosDisponiveis.includes(value);
    }
    defaultMessage(args) {
        return `O genero informado '${args.value}' não é válido. Os valores válidos são: F, M`;
    }
};
exports.IsValidGenero = IsValidGenero;
exports.IsValidGenero = IsValidGenero = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'validarGenero', async: false })
], IsValidGenero);
//# sourceMappingURL=validarGenero.js.map