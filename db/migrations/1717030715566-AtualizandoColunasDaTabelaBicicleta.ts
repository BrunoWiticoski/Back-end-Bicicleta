import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoColunasDaTabelaBicicleta1717030715566 implements MigrationInterface {
    name = 'AtualizandoColunasDaTabelaBicicleta1717030715566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "genero"`);
        await queryRunner.query(`DROP TYPE "public"."bicicletas_genero_enum"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "marca" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "modelo" character varying(50) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."bicicletas_tamanhoaros_enum" AS ENUM('ARO 12', 'ARO 16', 'ARO 20', 'ARO 24', 'ARO 26', 'ARO 27,5', 'ARO 29')`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "tamanhoaros" "public"."bicicletas_tamanhoaros_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "chassi" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "cor" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "codntf" character varying(44) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "codntf"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "cor"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "chassi"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "tamanhoaros"`);
        await queryRunner.query(`DROP TYPE "public"."bicicletas_tamanhoaros_enum"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "modelo"`);
        await queryRunner.query(`ALTER TABLE "bicicletas" DROP COLUMN "marca"`);
        await queryRunner.query(`CREATE TYPE "public"."bicicletas_genero_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "genero" "public"."bicicletas_genero_enum" DEFAULT 'I'`);
        await queryRunner.query(`ALTER TABLE "bicicletas" ADD "data_nascimento" date`);
    }

}
