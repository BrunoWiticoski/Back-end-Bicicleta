import { MigrationInterface, QueryRunner } from "typeorm";
import { Generos } from "src/pessoas/genero.enum";

export class InsertPessoasEntity1717899506303 implements MigrationInterface {
    name = 'InsertPessoasEntity1717899506303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO pessoas (id, nome, cpf, data_nascimento, generos, telefone, cidade) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'João', '12345678900', '1990-01-01', '${Generos.MASCULINO}', '123456789', 'São Paulo'),
            ('49f460f2-0e5f-4993-8e04-2d8ddaa92d6a', 'Maria', '98765432100', '1995-05-05', '${Generos.FEMININO}', '987654321', 'Rio de Janeiro')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM pessoas WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);

        await queryRunner.query(`
            DELETE FROM pessoas WHERE id = '49f460f2-0e5f-4993-8e04-2d8ddaa92d6a'
        `);
    }
}
