"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPessoasEntity1717899506303 = void 0;
const genero_enum_1 = require("../../src/pessoas/genero.enum");
class InsertPessoasEntity1717899506303 {
    constructor() {
        this.name = 'InsertPessoasEntity1717899506303';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO pessoas (id, nome, cpf, data_nascimento, generos, telefone, cidade) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'João', '12345678900', '1990-01-01', '${genero_enum_1.Generos.MASCULINO}', '123456789', 'São Paulo'),
            ('49f460f2-0e5f-4993-8e04-2d8ddaa92d6a', 'Maria', '98765432100', '1995-05-05', '${genero_enum_1.Generos.FEMININO}', '987654321', 'Rio de Janeiro')
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM pessoas WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);
        await queryRunner.query(`
            DELETE FROM pessoas WHERE id = '49f460f2-0e5f-4993-8e04-2d8ddaa92d6a'
        `);
    }
}
exports.InsertPessoasEntity1717899506303 = InsertPessoasEntity1717899506303;
//# sourceMappingURL=1717899506303-InsertPessoaEntity.js.map