import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateArrendamientoDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    fecha_inicio: string;

    @IsString()
    @IsNotEmpty()
    fecha_fin: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsNotEmpty()
    activo: boolean;

    @IsNumber()
    @IsOptional()
    propiedad_id: number;

    @IsNumber()
    @IsOptional()
    arrendatario_id: number;
}
