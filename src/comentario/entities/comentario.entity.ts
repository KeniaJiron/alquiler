import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';
@Entity()
export class Comentario {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'int' })
  propiedad_id: number;

  @Column({ type: 'varchar', length: 100 })
  comentario: string;

  @Column({ type: 'varchar', length: 25 })
  fecha: string;

  @Column({type:"int"})
  calificacion: number;

  @ManyToOne(() => User, (user) => user.comentario)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Propiedad, (propiedad) => propiedad.comentario)
  @JoinColumn({ name: 'propiedad_id' })
  propiedad: Propiedad;
}
