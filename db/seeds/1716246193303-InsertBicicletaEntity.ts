import { MigrationInterface, QueryRunner } from "typeorm";
import { TamanhoArosEnum } from "src/bicicleta/aros.enum";

export class InsertBicicletaEntity1716246193303 implements MigrationInterface {
    name = 'InsertBicicletaEntity1716246193303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO bicicletas (id, nome, marca, modelo, tamanhoaros, chassi, cor, codntf) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'Bicicleta A', 'Marca A', 'Modelo A', '${TamanhoArosEnum.A26}', 'ABC123', 'Vermelho', '123456'),
            ('49f460f2-0e5f-4993-8e04-2d8ddaa92d6a', 'Bicicleta B', 'Marca B', 'Modelo B', '${TamanhoArosEnum.A29}', 'DEF456', 'Azul', '789012')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM bicicletas WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);

        await queryRunner.query(`
            DELETE FROM bicicletas WHERE id = '49f460f2-0e5f-4993-8e04-2d8ddaa92d6a'
        `);
    }
}
