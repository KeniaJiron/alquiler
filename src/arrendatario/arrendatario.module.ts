import { Module } from '@nestjs/common';
import { ArrendatarioService } from './arrendatario.service';
import { ArrendatarioController } from './arrendatario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arrendatario } from './entities/arrendatario.entity';
import { Arrendamiento } from 'src/arrendamiento/entities/arrendamiento.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Arrendatario, Arrendamiento, User])], 
  controllers: [ArrendatarioController],
  providers: [ArrendatarioService]
})
export class ArrendatarioModule {}
