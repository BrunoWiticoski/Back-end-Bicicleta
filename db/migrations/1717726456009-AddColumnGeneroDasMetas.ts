import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnGeneroDasMetas1717726456009 implements MigrationInterface {
    name = 'AddColumnGeneroDasMetas1717726456009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "metas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "km" integer NOT NULL, "tempo" integer NOT NULL, "media" character varying(20) NOT NULL, "data_corrida" date, "observacao" character varying(50) NOT NULL, CONSTRAINT "PK_3a375a83dfcb41b974082b3b1ef" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "metas"`);
    }

}
