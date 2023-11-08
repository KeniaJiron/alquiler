import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateComentarioDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    contenido: string;

    @IsNumber()
    @IsNotEmpty()
    calificacion: number;

    @IsString()
    fecha:string

    @IsNumber()
    @IsOptional()
    user_id: number;

    @IsNumber()
    @IsOptional()
    propiedad_id: number;
}
