import { BicicletaService } from './bicicleta.service';
import { BicicletaDto } from './bicicleta.dto';
export declare class BicicletaController {
    private bicicletaService;
    constructor(bicicletaService: BicicletaService);
    findAll(): Promise<import("./bicicleta.entity").BicicletaEntity[]>;
    findById(id: string): Promise<import("./bicicleta.entity").BicicletaEntity>;
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
    create(dto: BicicletaDto): Promise<import("./bicicleta.entity").BicicletaEntity>;
    update(id: string, dto: BicicletaDto): Promise<{
        id: string;
        nome: string;
        marca: string;
        modelo: string;
        tamanhoaros: import("./aros.enum").TamanhoArosEnum;
        chassi: string;
        cor: string;
        codntf: string;
    } & import("./bicicleta.entity").BicicletaEntity>;
}
