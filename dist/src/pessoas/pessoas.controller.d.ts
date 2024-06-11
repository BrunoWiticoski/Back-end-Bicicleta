import { PessoasService } from './pessoas.service';
import { PessoasDto } from './pessoas.dto';
export declare class PessoasController {
    private pessoasService;
    constructor(pessoasService: PessoasService);
    findAll(): Promise<import("./pessoas.entity").PessoasEntity[]>;
    findById(id: string): Promise<import("./pessoas.entity").PessoasEntity>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        cpf: string;
        data_nascimento: string;
        generos: import("./genero.enum").Generos;
        telefone: string;
        cidade: string;
    }>;
    create(dto: PessoasDto): Promise<import("./pessoas.entity").PessoasEntity>;
    update(id: string, dto: PessoasDto): Promise<{
        nome: string;
        cpf: string;
        data_nascimento: string;
        generos: import("./genero.enum").Generos;
        telefone: string;
        cidade: string;
        id: string;
    } & import("./pessoas.entity").PessoasEntity>;
}
