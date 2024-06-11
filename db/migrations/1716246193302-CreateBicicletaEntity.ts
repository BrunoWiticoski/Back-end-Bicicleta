import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBicicletaEntity1716246193302 implements MigrationInterface {
    name = 'CreateAutorEntity1716246193302'

    public async up(queryRunner: QueryRunner): Promise<void> {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bicicletas"`);
    }

}
