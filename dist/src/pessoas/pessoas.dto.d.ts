import { Generos } from './genero.enum';
export declare class PessoasDto {
    id?: string;
    nome: string;
    cpf: string;
    data_nascimento: string;
    generos: Generos;
    telefone: string;
    cidade: string;
}
