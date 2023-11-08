import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { CreatePropiedadDto } from './dto/create-propiedad.dto';

@Controller('propiedad')
export class PropiedadController {
  constructor(private readonly propiedadService: PropiedadService) {}

  @Post()
  create(@Body() createPropiedadDto: CreatePropiedadDto) {
    return this.propiedadService.create(createPropiedadDto);
  }

  @Get()
  findAll() {
    return this.propiedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propiedadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropiedadDto: CreatePropiedadDto) {
    return this.propiedadService.update(+id, updatePropiedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propiedadService.remove(+id);
  }
}
