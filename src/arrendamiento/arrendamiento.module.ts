import { Module } from '@nestjs/common';
import { ArrendamientoService } from './arrendamiento.service';
import { ArrendamientoController } from './arrendamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arrendamiento } from './entities/arrendamiento.entity';
import { Arrendatario } from 'src/arrendatario/entities/arrendatario.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Arrendamiento, Arrendatario, Propiedad])],
  controllers: [ArrendamientoController],
  providers: [ArrendamientoService]
})
export class ArrendamientoModule {}
