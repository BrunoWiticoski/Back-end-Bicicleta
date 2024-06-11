"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnGeneroDasMetas1717726456009 = void 0;
class AddColumnGeneroDasMetas1717726456009 {
    constructor() {
        this.name = 'AddColumnGeneroDasMetas1717726456009';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "metas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "km" integer NOT NULL, "tempo" integer NOT NULL, "media" character varying(20) NOT NULL, "data_corrida" date, "observacao" character varying(50) NOT NULL, CONSTRAINT "PK_3a375a83dfcb41b974082b3b1ef" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "metas"`);
    }
}
exports.AddColumnGeneroDasMetas1717726456009 = AddColumnGeneroDasMetas1717726456009;
//# sourceMappingURL=1717726456009-AddColumnGeneroDasMetas.js.map