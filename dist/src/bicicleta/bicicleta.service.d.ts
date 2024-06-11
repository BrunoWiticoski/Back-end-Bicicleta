import { Repository } from 'typeorm';
import { BicicletaEntity } from './bicicleta.entity';
import { BicicletaDto } from './bicicleta.dto';
export declare class BicicletaService {
    private bicicletaRepository;
    constructor(bicicletaRepository: Repository<BicicletaEntity>);
    findAll(): Promise<BicicletaEntity[]>;
    findById(id: string): Promise<BicicletaEntity>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        marca: string;
        modelo: string;
        tamanhoaros: import("./aros.enum").TamanhoArosEnum;
        chassi: string;
        cor: string;
        codntf: string;
        metas: import("../meta/meta.entity").MetaEntity[];
    }>;
    create(dto: BicicletaDto): Promise<BicicletaEntity>;
    update(id: string, dto: BicicletaDto): Promise<{
        id: string;
        nome: string;
        marca: string;
        modelo: string;
        tamanhoaros: import("./aros.enum").TamanhoArosEnum;
        chassi: string;
        cor: string;
        codntf: string;
    } & BicicletaEntity>;
    searchAdvanced(params: any): Promise<BicicletaEntity[]>;
}
