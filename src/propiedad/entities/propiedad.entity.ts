import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "./image.entity";
import { Arrendamiento } from "src/arrendamiento/entities/arrendamiento.entity";
import { Propietario } from "src/propietario/entities/propietario.entity";
import { Comentario } from "src/comentario/entities/comentario.entity";

@Entity()
export class Propiedad {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar", length: 100})
    direccion: string;

    @Column({type: "varchar", length: 100})
    descripcion: string;

    @Column({type: "int"})
    precio: number;

    @Column({type: "int"})
    habitaciones: number;

    @Column({type: "int"})
    baños: number;

    @Column({type:'boolean', default: true})
    disponible: boolean;

    @OneToMany(()=> Image, image => image.propiedad)
    images: Image[];

    @OneToMany(()=>Propietario, propietario => propietario.propiedad)
    propietario: Propietario[];

    @OneToMany(()=>Arrendamiento, arrendamiento => arrendamiento.propiedad)
    arrendamiento: Arrendamiento[];

    @OneToMany(()=>Comentario, comentario => comentario.propiedad)
    comentario: Comentario[];
}
