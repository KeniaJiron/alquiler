import { Injectable } from '@nestjs/common';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
  ){}

  async create(createComentarioDto: any) {
    const comentario = this.comentarioRepository.create(createComentarioDto);
    await this.comentarioRepository.save(comentario);
    return comentario;
  }

  async findAll() {
    const comentarios = await this.comentarioRepository.find();
    if(!comentarios)
    {
      throw new Error('No hay comentarios');
    }
    return comentarios;
  }

  async findOne(id: number) {
    const comentario = await this.comentarioRepository.findOne({where: {id: id}});
    if(!comentario)
    {
      throw new Error('Comentario no encontrado');
    }
    return comentario;
  }

  async update(id: number, updateComentarioDto: any) {
    const comentario = await this.comentarioRepository.findOne({where: {id: id}});
    if(!comentario)
    {
      throw new Error('Comentario no encontrado');
    }
    const editedComentario = Object.assign(comentario, updateComentarioDto);
    return await this.comentarioRepository.save(editedComentario);
  }

  async remove(id: number) {
    const comentario = await this.comentarioRepository.findOne({where: {id: id}});
    if(!comentario)
    {
      throw new Error('Comentario no encontrado');
    }
    return await this.comentarioRepository.remove(comentario);
  }
}
