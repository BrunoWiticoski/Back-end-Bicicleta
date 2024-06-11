import { MetaService } from './meta.service';
import { MetaDto } from './meta.dto';
export declare class MetaController {
    private metaService;
    constructor(metaService: MetaService);
    findAll(): Promise<import("./meta.entity").MetaEntity[]>;
    findById(id: string): Promise<import("./meta.entity").MetaEntity>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        km: number;
        tempo: number;
        media: string;
        data_corrida: Date;
        observacao: string;
        bicicletas: import("../bicicleta/bicicleta.entity").BicicletaEntity[];
    }>;
    create(dto: MetaDto): Promise<import("./meta.entity").MetaEntity>;
    update(id: string, dto: MetaDto): Promise<{
        nome: string;
        km: number;
        tempo: number;
        media: string;
        data_corrida: Date;
        observacao: string;
        id: string;
    } & import("./meta.entity").MetaEntity>;
}
