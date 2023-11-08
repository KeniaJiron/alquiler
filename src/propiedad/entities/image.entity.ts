import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Propiedad } from "./propiedad.entity";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;
    
    @Column({type: "varchar", length: 100})
    url: string;

    @ManyToOne(() => Propiedad, propiedad => propiedad.images, {
        onDelete: 'CASCADE'
    })
    propiedad: Propiedad;

}