import { Repository } from 'typeorm';
import { PessoasEntity } from './pessoas.entity';
import { PessoasDto } from './pessoas.dto';
import { Generos } from './genero.enum';
export declare class PessoasService {
    private pessoasRepository;
    constructor(pessoasRepository: Repository<PessoasEntity>);
    findAll(): Promise<PessoasEntity[]>;
    findById(id: string): Promise<PessoasEntity>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        cpf: string;
        data_nascimento: string;
        generos: Generos;
        telefone: string;
        cidade: string;
    }>;
    create(dto: PessoasDto): Promise<PessoasEntity>;
    update({ id, ...dto }: PessoasDto): Promise<{
        nome: string;
        cpf: string;
        data_nascimento: string;
        generos: Generos;
        telefone: string;
        cidade: string;
        id: string;
    } & PessoasEntity>;
    searchAdvanced(params: any): Promise<PessoasEntity[]>;
}
