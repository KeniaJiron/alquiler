import { Injectable } from '@nestjs/common';
import { CreateArrendatarioDto } from './dto/create-arrendatario.dto';
import { Arrendatario } from './entities/arrendatario.entity';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArrendatarioService {
  constructor(
    @InjectRepository(Arrendatario)
    private readonly arrendatarioRepository: Repository<Arrendatario>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(userId: number, createArrendarioRepo:CreateArrendatarioDto)
  {
    const user = await this.userRepository.findOne({where: {id: userId}});
    if(!user)
    {
      throw new Error('Usuario o propiedad no encontrada');
    }
    const arrendatario = this.arrendatarioRepository.create(createArrendarioRepo);
    arrendatario.user = user;
    await this.arrendatarioRepository.save(arrendatario);
    return arrendatario;
  }


  async findAll() {
    const arrendatarios = await this.arrendatarioRepository.find({relations: ['user']});
    if(!arrendatarios)
    {
      throw new Error('No hay arrendatarios');
    }
    return arrendatarios;
  }

  async findOne(id: number) {
    const arrendatario = await this.arrendatarioRepository.findOne({where: {id: id}, relations: ['user']});
    if(!arrendatario)
    {
      throw new Error('Arrendatario no encontrado');
    }
    return arrendatario;
  }

async update(id: number, updateArrendatarioDto: CreateArrendatarioDto) {
    const arrendatario = await this.arrendatarioRepository.findOne({where: {id: id}, relations: ['user']});
    if(!arrendatario)
    {
      throw new Error('Arrendatario no encontrado');
    }
    const editedArrendatario = Object.assign(arrendatario, updateArrendatarioDto);
    return await this.arrendatarioRepository.save(editedArrendatario);
  }

  async remove(id: number) {
    const arrendatario = await this.arrendatarioRepository.findOne({where: {id: id}, relations: ['user']});
    if(!arrendatario)
    {
      throw new Error('Arrendatario no encontrado');
    }
    return await this.arrendatarioRepository.remove(arrendatario);
  }
}
