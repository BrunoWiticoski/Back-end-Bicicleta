import { Body, Controller, Delete, Get, Param, Post, Put, BadRequestException } from '@nestjs/common';
import { BicicletaService } from './bicicleta.service';
import { BicicletaDto } from './bicicleta.dto';
import { validate } from 'class-validator';

@Controller('bicicletas')
export class BicicletaController {
  constructor(private bicicletaService: BicicletaService) {}

  @Get()
  async findAll() {
    return this.bicicletaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.bicicletaService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bicicletaService.remove(id);
  }

  @Post()
  async create(@Body() dto: BicicletaDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.bicicletaService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: BicicletaDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.bicicletaService.update(id, dto);
  }
}
