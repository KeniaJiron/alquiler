import { Injectable } from '@nestjs/common';
import { CreatePropietarioDto } from './dto/create-propietario.dto';

import { User } from 'src/users/entities/user.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Propietario } from './entities/propietario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropietarioService {

  constructor (
    @InjectRepository(Propietario)
    private readonly propietarioRepository: Repository<Propietario>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Propiedad)
    private readonly propiedadRepository: Repository<Propiedad>,
  ){}

  async create(userId: number, propiedadId: number, createPropietarioDto: CreatePropietarioDto) {
    const user = await this.userRepository.findOne({where: {id: userId}});
    if(!user)
    {
      throw new Error('Usuario no encontrado');
    }
    const propiedad = await this.propiedadRepository.findOne({where: {id: propiedadId}});
    if(!propiedad)
    {
      throw new Error('Propiedad no encontrada');
    }
    const propietario = this.propietarioRepository.create(createPropietarioDto);
    propietario.user = user;
    propietario.propiedad = propiedad;
    await this.propietarioRepository.save(propietario);
    return propietario;
  }


  async findAll() {
    const propietarios = await this.propietarioRepository.find({relations: ['user', 'propiedad']});
    if(!propietarios)
    {
      throw new Error('No hay propietarios');
    }
    return propietarios;
  }


  async findOne(id: number) {
    const propietario = await this.propietarioRepository.findOne({where: {id: id}, relations: ['user', 'propiedad']});
    if(!propietario)
    {
      throw new Error('Propietario no encontrado');
    }
    return propietario;
  }

  async update(id: number, updatePropietarioDto: CreatePropietarioDto) {
    const propietario = await this.propietarioRepository.findOne({where: {id: id}});
    if(!propietario)
    {
      throw new Error('Propietario no encontrado');
    }
    await this.propietarioRepository.update({id}, updatePropietarioDto);
    return propietario;
  }

  async remove(id: number) {
    const propietario = await this.propietarioRepository.findOne({where: {id: id}});
    if(!propietario)
    {
      throw new Error('Propietario no encontrado');
    }
    await this.propietarioRepository.delete({id});
    return propietario;
  }
}
