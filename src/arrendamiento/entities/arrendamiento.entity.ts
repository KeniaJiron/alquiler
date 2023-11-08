import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { Arrendatario } from "src/arrendatario/entities/arrendatario.entity";
@Entity()
export class Arrendamiento {
    @PrimaryGeneratedColumn({type: "int"})
    id:number;

    @Column({type: "varchar", length: 25})
    fecha_inicio: string;

    @Column({type: "varchar", length: 25})
    fecha_fin: string;

    @Column({type: "int"})
    precio: number;

    @Column({type:"boolean", default: true})
    activo: boolean;

    @ManyToOne(()=>Propiedad, propiedad => propiedad.arrendamiento)
    propiedad: Propiedad;

    @OneToOne(() => Arrendatario)
    @JoinColumn()
    arrendatario: Arrendatario;
}
