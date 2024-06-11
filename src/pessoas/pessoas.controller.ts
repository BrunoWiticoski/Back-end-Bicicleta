import { Body, Controller, Delete, Get, Param, Post, Put, BadRequestException } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasDto } from './pessoas.dto';
import { validate } from 'class-validator';

@Controller('pessoas')
export class PessoasController {
  constructor(private pessoasService: PessoasService) {}

  @Get()
  async findAll() {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.pessoasService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pessoasService.remove(id);
  }

  @Post()
  async create(@Body() dto: PessoasDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.pessoasService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: PessoasDto) {
    return this.pessoasService.update({ id, ...dto });
  }
}
