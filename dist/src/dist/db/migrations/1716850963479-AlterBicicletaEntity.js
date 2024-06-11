"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterBicicletaEntity1716850963479 = void 0;
class AlterBicicletaEntity1716850963479 {
    constructor() {
        this.name = 'AlterBicicletaEntity1716850963479';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "data_nascimento" date`);
        await queryRunner.query(`CREATE TYPE "public"."bicicletas_genero_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "genero" "public"."bicicletas_genero_enum" DEFAULT 'I'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "genero"`);
        await queryRunner.query(`DROP TYPE "public"."bicicletas_genero_enum"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "data_nascimento"`);
    }
}
exports.AlterBicicletaEntity1716850963479 = AlterBicicletaEntity1716850963479;
//# sourceMappingURL=1716850963479-AlterBicicletaEntity.js.map