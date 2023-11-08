import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateArrendatarioDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsNumber()
    @IsOptional()
    user_id: number;
}
