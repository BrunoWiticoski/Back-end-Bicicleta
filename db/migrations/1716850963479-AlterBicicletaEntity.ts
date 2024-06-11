import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterBicicletaEntity1716850963479 implements MigrationInterface {
    name = 'AlterBicicletaEntity1716850963479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "data_nascimento" date`);
        await queryRunner.query(`CREATE TYPE "public"."bicicletas_genero_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "genero" "public"."bicicletas_genero_enum" DEFAULT 'I'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "genero"`);
        await queryRunner.query(`DROP TYPE "public"."bicicletas_genero_enum"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "data_nascimento"`);
    }

}
