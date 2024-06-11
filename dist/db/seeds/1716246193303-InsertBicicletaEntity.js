"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertBicicletaEntity1716246193303 = void 0;
const aros_enum_1 = require("../../src/bicicleta/aros.enum");
class InsertBicicletaEntity1716246193303 {
    constructor() {
        this.name = 'InsertBicicletaEntity1716246193303';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO bicicletas (id, nome, marca, modelo, tamanhoaros, chassi, cor, codntf) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'Bicicleta A', 'Marca A', 'Modelo A', '${aros_enum_1.TamanhoArosEnum.A26}', 'ABC123', 'Vermelho', '123456'),
            ('49f460f2-0e5f-4993-8e04-2d8ddaa92d6a', 'Bicicleta B', 'Marca B', 'Modelo B', '${aros_enum_1.TamanhoArosEnum.A29}', 'DEF456', 'Azul', '789012')
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM bicicletas WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);
        await queryRunner.query(`
            DELETE FROM bicicletas WHERE id = '49f460f2-0e5f-4993-8e04-2d8ddaa92d6a'
        `);
    }
}
exports.InsertBicicletaEntity1716246193303 = InsertBicicletaEntity1716246193303;
//# sourceMappingURL=1716246193303-InsertBicicletaEntity.js.map