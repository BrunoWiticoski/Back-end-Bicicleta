import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnGeneroDasPessoas1717899506303 implements MigrationInterface {
    name = 'AddColumnGeneroDasPessoas1717899506303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."pessoas_generos_enum" AS ENUM('F', 'M')`);
        await queryRunner.query(`CREATE TABLE "pessoas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "cpf" character varying(50) NOT NULL, "data_nascimento" character varying(50) NOT NULL, "generos" "public"."pessoas_generos_enum" NOT NULL, "telefone" character varying(20) NOT NULL, "cidade" character varying(44) NOT NULL, CONSTRAINT "UQ_efa0ecfc2a0b9f3611b071039a1" UNIQUE ("nome"), CONSTRAINT "PK_fa8104cfc91dc207880a73a1acd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bicicletas_metas" ("bicicleta_id" uuid NOT NULL, "meta_id" uuid NOT NULL, CONSTRAINT "PK_60c184331a2e9d16db967dfc559" PRIMARY KEY ("bicicleta_id", "meta_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_21a48dbd639e8b9df6924ed895" ON "bicicletas_metas" ("bicicleta_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_25b5a736fabdc413da8cc02b8b" ON "bicicletas_metas" ("meta_id") `);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD CONSTRAINT "UQ_b49d258c9ec2342cc6350e57fa6" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "bicicletas_metas" ADD CONSTRAINT "FK_21a48dbd639e8b9df6924ed895a" FOREIGN KEY ("bicicleta_id") REFERENCES "bicicletas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "bicicletas_metas" ADD CONSTRAINT "FK_25b5a736fabdc413da8cc02b8b4" FOREIGN KEY ("meta_id") REFERENCES "metas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bicicletas_metas" DROP CONSTRAINT "FK_25b5a736fabdc413da8cc02b8b4"`);
        await queryRunner.query(`ALTER TABLE "bicicletas_metas" DROP CONSTRAINT "FK_21a48dbd639e8b9df6924ed895a"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP CONSTRAINT "UQ_b49d258c9ec2342cc6350e57fa6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_25b5a736fabdc413da8cc02b8b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21a48dbd639e8b9df6924ed895"`);
        await queryRunner.query(`DROP TABLE "bicicletas_metas"`);
        await queryRunner.query(`DROP TABLE "pessoas"`);
        await queryRunner.query(`DROP TYPE "public"."pessoas_generos_enum"`);
    }

}
