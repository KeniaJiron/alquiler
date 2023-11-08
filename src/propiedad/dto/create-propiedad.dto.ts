import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePropiedadDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    habitaciones: number;

    @IsNumber()
    @IsNotEmpty()
    baños: number;

    @IsOptional()
    @IsBoolean()
    disponible: boolean;

    @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];

}
