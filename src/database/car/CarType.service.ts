import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from './CarType.entity';
import { Repository } from 'typeorm';
import { CreateCarTypeDto } from './dto/CarType.dtos';

@Injectable()
export class CarTypeServices {
  constructor(
    @InjectRepository(CarType)
    private readonly CarTypeRepository: Repository<CarType>,
  ) {}

  createCarType(createCarTypeDto: CreateCarTypeDto) {
    const newCarType = this.CarTypeRepository.create(createCarTypeDto);
    return this.CarTypeRepository.save(newCarType);
  }

  getCarTypes(){
    return this.CarTypeRepository.find();
  }

  findCarTypeById(id: number) {
    return this.CarTypeRepository.findOne(id);
  }
}
