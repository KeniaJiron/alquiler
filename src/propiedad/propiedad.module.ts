import { Module } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { PropiedadController } from './propiedad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Propiedad } from './entities/propiedad.entity';
import { Image } from './entities/image.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Propiedad, Image])],
  controllers: [PropiedadController],
  providers: [PropiedadService]
})
export class PropiedadModule {}
