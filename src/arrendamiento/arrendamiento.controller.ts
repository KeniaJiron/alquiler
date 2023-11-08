import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArrendamientoService } from './arrendamiento.service';
import { CreateArrendamientoDto } from './dto/create-arrendamiento.dto';

@Controller('arrendamiento')
export class ArrendamientoController {
  constructor(private readonly arrendamientoService: ArrendamientoService) {}

  @Post(':arrendario_id/:propiedad_id')
  create(@Param('arrendario_id') arrendario_id: string, @Param('propiedad_id') propiedad_id: string, @Body() createArrendamientoDto: CreateArrendamientoDto) {
    return this.arrendamientoService.create(+arrendario_id, +propiedad_id, createArrendamientoDto);
  }

  @Get()
  findAll() {
    return this.arrendamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arrendamientoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArrendamientoDto: CreateArrendamientoDto) {
    return this.arrendamientoService.update(+id, updateArrendamientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arrendamientoService.remove(+id);
  }
}
