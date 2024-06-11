"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBicicletaEntity1716246193302 = void 0;
class CreateBicicletaEntity1716246193302 {
    constructor() {
        this.name = 'CreateAutorEntity1716246193302';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "bicicletas" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "marca" character varying(50) NOT NULL,
                "modelo" character varying(50) NOT NULL,
                "tamanhoaros" character varying(50) NOT NULL,
                "chassi" character varying(10) NOT NULL,
                "cor" character varying(20) NOT NULL,
                "codntf" character varying(44) NOT NULL,
                CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "bicicletas"`);
    }
}
exports.CreateBicicletaEntity1716246193302 = CreateBicicletaEntity1716246193302;
//# sourceMappingURL=1716246193302-CreateBicicletaEntity.js.map