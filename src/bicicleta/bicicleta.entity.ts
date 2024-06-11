import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TamanhoArosEnum } from './aros.enum';
import { MetaEntity } from 'src/meta/meta.entity';

@Entity({ name: 'bicicletas' })
@Unique(['nome']) 
export class BicicletaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  marca: string;

  @Column({ length: 50 })
  modelo: string;

  @Column({
    type: 'enum',
    enum: TamanhoArosEnum,
    nullable: false,
  })
  tamanhoaros: TamanhoArosEnum;
  
  @Column({ length: 10 })
  chassi: string;
  
  @Column({ length: 20 })
  cor: string;

  @Column({ length: 44 })
  codntf: string;

  @ManyToMany(() => MetaEntity, meta => meta.bicicletas)
  @JoinTable({
    name: 'bicicletas_metas',
    joinColumn: { name: 'bicicleta_id' },
    inverseJoinColumn: { name: 'meta_id' },
  })
  metas: MetaEntity[];

}
