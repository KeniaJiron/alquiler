import { Injectable } from '@nestjs/common';
import { CreateArrendamientoDto } from './dto/create-arrendamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arrendamiento } from './entities/arrendamiento.entity';
import { Repository } from 'typeorm';
import { Arrendatario } from 'src/arrendatario/entities/arrendatario.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';

@Injectable()
export class ArrendamientoService {
  constructor(
    @InjectRepository(Arrendamiento)
    private readonly arrendamientoRepository: Repository<Arrendamiento>,
    @InjectRepository(Arrendatario)
    private readonly arrendatarioRepository: Repository<Arrendatario>,
    @InjectRepository(Propiedad)
    private readonly propiedadRepository: Repository<Propiedad>,
  ){}

  async create(arrendatario_id: number, propiedad_Id: number, createArrendamientoDto: CreateArrendamientoDto) {
    const arrendatario = await this.arrendatarioRepository.findOne({where: {id: arrendatario_id}});
    if(!arrendatario)
    {
      throw new Error('Arrendatario no encontrado');
    }
    const propiedad = await this.propiedadRepository.findOne({where: {id: propiedad_Id}});
    if(!propiedad)
    {
      throw new Error('Propiedad no encontrada');
    }
    const arrendamiento = this.arrendamientoRepository.create(createArrendamientoDto);
    arrendamiento.arrendatario = arrendatario;
    arrendamiento.propiedad = propiedad;
    await this.arrendamientoRepository.save(arrendamiento);
    return arrendamiento;
  }

  async findAll() {
    const arrendamientos = await this.arrendamientoRepository.find({
      relations: ['arrendatario', 'propiedad']
    });
    if(!arrendamientos)
    {
      throw new Error('No hay arrendamientos');
    }
    return arrendamientos;
  }

  async findOne(id: number) {
    const arrendamiento = await this.arrendamientoRepository.findOne({where: {id: id}, relations: ['arrendatario', 'propiedad']});
    if(!arrendamiento)
    {
      throw new Error('Arrendamiento no encontrado');
    }
    return arrendamiento;
  }

  async update(id: number, updateArrendamientoDto: CreateArrendamientoDto) {
    const arrendamiento = await this.arrendamientoRepository.findOne({where: {id: id},
      relations: ['arrendatario', 'propiedad']});
    if(!arrendamiento)
    {
      throw new Error('Arrendamiento no encontrado');
    }
    const editedArrendamiento = Object.assign(arrendamiento, updateArrendamientoDto);
    return await this.arrendamientoRepository.save(editedArrendamiento);
  }

  async remove(id: number) {
    const arrendamiento = await this.arrendamientoRepository.findOne({where: {id: id}});
    if(!arrendamiento)
    {
      throw new Error('Arrendamiento no encontrado');
    }
    return await this.arrendamientoRepository.remove(arrendamiento);
  }
}
