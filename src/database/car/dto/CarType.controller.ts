import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateCarTypeDto } from './CarType.dtos';
import { CarTypeServices } from '../CarType.service';

@Controller('car-type')
export class CarTypeController {
  constructor(private readonly carTypeServices: CarTypeServices) {}

  @Get()
  getCarTypes() {
    return this.carTypeServices.getCarTypes();
  }

  @Get('id/:id')
  findCarTypeById(@Param('id', ParseIntPipe) id: number) {
    return this.carTypeServices.findCarTypeById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCarTypes(@Body() createCarTypeDto: CreateCarTypeDto) {
    return this.carTypeServices.createCarType(createCarTypeDto);
  }
}
