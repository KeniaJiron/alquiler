import { Module } from '@nestjs/common';
import { PropietarioService } from './propietario.service';
import { PropietarioController } from './propietario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Propietario } from './entities/propietario.entity';
import { User } from 'src/users/entities/user.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Propietario, User, Propiedad])],
  controllers: [PropietarioController],
  providers: [PropietarioService]
})
export class PropietarioModule {}
