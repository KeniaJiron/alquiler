import { IsNumber, IsOptional } from 'class-validator';
export class CreatePropietarioDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsNumber()
    @IsOptional()
    user_id: number;

    @IsNumber()
    @IsOptional()
    propiedad_id: number;
}
