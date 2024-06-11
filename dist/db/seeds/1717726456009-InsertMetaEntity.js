"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertMetaEntity1717726456009 = void 0;
class InsertMetaEntity1717726456009 {
    constructor() {
        this.name = 'InsertMetaEntity1717726456009';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO metas (id, nome, km, tempo, media, data_corrida, observacao) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'Meta A', 100, 120, '10 km/h', '2024-01-01', 'Observação A'),
            ('49f460f2-0e5f-4993-8e04-2d8ddaa92d6a', 'Meta B', 150, 180, '12 km/h', '2024-01-15', 'Observação B')
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM metas WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);
        await queryRunner.query(`
            DELETE FROM metas WHERE id = '49f460f2-0e5f-4993-8e04-2d8ddaa92d6a'
        `);
    }
}
exports.InsertMetaEntity1717726456009 = InsertMetaEntity1717726456009;
//# sourceMappingURL=1717726456009-InsertMetaEntity.js.map