import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Arrendamiento } from "src/arrendamiento/entities/arrendamiento.entity";
@Entity()
export class Arrendatario {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @ManyToOne(() => User, user => user.arrendatario,)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToOne(() => Arrendamiento, arrendamiento => arrendamiento.arrendatario)
    arrendamiento: Arrendamiento;
}
