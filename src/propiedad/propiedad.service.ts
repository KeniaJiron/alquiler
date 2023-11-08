import { Injectable } from '@nestjs/common';
import { CreatePropiedadDto } from './dto/create-propiedad.dto';
import { Image } from './entities/image.entity';
import { Propiedad } from './entities/propiedad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PropiedadService {
  constructor(
    @InjectRepository(Propiedad)
    private readonly propiedadRepository: Repository<Propiedad>,
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ){}
  async create(createPropiedadDto: CreatePropiedadDto) {
    const {images = [], ...dataPropiedad} = createPropiedadDto;
    const propiedad = this.propiedadRepository.create({
      ...dataPropiedad,
      images: images.map((image) => this.imageRepository.create({ url: image })),
    });
    await this.propiedadRepository.save(propiedad);
    return propiedad;
  }

  async findAll() {
    const propiedades = await this.propiedadRepository.find({relations: ['images']});
    if(!propiedades)
    {
      throw new Error('No hay propiedades');
    }
    return propiedades;
  }

  async findOne(id: number) {
    const propiedad = await this.propiedadRepository.findOne({where: {id: id}, relations: ['images']});
    if(!propiedad)
    {
      throw new Error('Propiedad no encontrada');
    }
    return propiedad;
  }

  async update(id: number, updatePropiedadDto: CreatePropiedadDto) {
    const propiedad = await this.propiedadRepository.findOne({where: {id: id}, relations: ['images']});
    if(!propiedad)
    {
      throw new Error('Propiedad no encontrada');
    }
    const editedPropiedad = Object.assign(propiedad, updatePropiedadDto);
    return await this.propiedadRepository.save(editedPropiedad);
  }

  async remove(id: number) {
    const propiedad = await this.propiedadRepository.findOne({where: {id: id}, relations: ['images']});
    if(!propiedad)
    {
      throw new Error('Propiedad no encontrada');
    }
    return await this.propiedadRepository.remove(propiedad);
  }
}
