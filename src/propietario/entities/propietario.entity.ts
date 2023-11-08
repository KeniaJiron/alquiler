import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Propietario {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @ManyToOne(() => User, user => user.propietario)
    @JoinColumn({name: 'user_id'})
    user: User;
    
    @ManyToOne(() => Propiedad, propiedad => propiedad.propietario)
    @JoinColumn({name: 'propiedad_id'})
    propiedad: Propiedad;
}
