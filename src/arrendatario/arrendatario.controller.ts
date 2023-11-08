import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArrendatarioService } from './arrendatario.service';
import { CreateArrendatarioDto } from './dto/create-arrendatario.dto';

@Controller('arrendatario')
export class ArrendatarioController {
  constructor(private readonly arrendatarioService: ArrendatarioService) {}

  @Post(':userId')
  create(@Param('userId') userId: string, @Body() createArrendatarioDto: CreateArrendatarioDto) {
    return this.arrendatarioService.create(+userId, createArrendatarioDto);
  }

  @Get()  
  findAll() {
    return this.arrendatarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arrendatarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArrendatarioDto: CreateArrendatarioDto) {
    return this.arrendatarioService.update(+id, updateArrendatarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arrendatarioService.remove(+id);
  }
}
