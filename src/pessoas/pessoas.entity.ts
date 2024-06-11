import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Generos } from './genero.enum';

@Entity({ name: 'pessoas' })
@Unique(['nome'])
export class PessoasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  cpf: string;

  @Column({ length: 50 })
  data_nascimento: string;
  
  @Column({
    type: 'enum',
    enum: Generos,
    nullable: false,
  })
  generos: Generos;
  
  @Column({ length: 20 })
  telefone: string;

  @Column({ length: 44 })
  cidade: string;


}
