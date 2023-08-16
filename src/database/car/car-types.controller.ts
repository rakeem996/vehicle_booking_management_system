import { Controller, Get } from '@nestjs/common';
import { CarTypesService } from './car-types.service';

@Controller('car-types')
export class CarTypesController {
  constructor(private readonly carTypesService: CarTypesService) {}

  @Get()
  findAll() {
    return this.carTypesService.findAll();
  }
}
