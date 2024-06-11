import { Repository } from 'typeorm';
import { MetaEntity } from './meta.entity';
import { MetaDto } from './meta.dto';
import { BicicletaEntity } from 'src/bicicleta/bicicleta.entity';
export declare class MetaService {
    private metaRepository;
    private bicicletaRepository;
    constructor(metaRepository: Repository<MetaEntity>, bicicletaRepository: Repository<BicicletaEntity>);
    findAll(): Promise<MetaEntity[]>;
    findById(id: string): Promise<MetaEntity>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        km: number;
        tempo: number;
        media: string;
        data_corrida: Date;
        observacao: string;
        bicicletas: BicicletaEntity[];
    }>;
    create(dto: MetaDto): Promise<MetaEntity>;
    update({ id, ...dto }: MetaDto): Promise<{
        nome: string;
        km: number;
        tempo: number;
        media: string;
        data_corrida: Date;
        observacao: string;
        id: string;
    } & MetaEntity>;
    searchAdvanced(params: any): Promise<MetaEntity[]>;
}
