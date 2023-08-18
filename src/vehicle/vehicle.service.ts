import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle: Vehicle = new Vehicle();
    vehicle.user = createVehicleDto.user;
    vehicle.wheels = createVehicleDto.wheel;
    vehicle.vehicleType = createVehicleDto.vehicleType;
    vehicle.vehicleModel = createVehicleDto.vehicleModel;
    return this.vehicleRepository.save(vehicle);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOne(id: number) {
    return this.vehicleRepository.findOne({ where: { id } });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    const vehicle: Vehicle = new Vehicle();
    vehicle.user = updateVehicleDto.user;
    vehicle.wheels = updateVehicleDto.wheel;
    vehicle.vehicleType = updateVehicleDto.vehicleType;
    vehicle.vehicleModel = updateVehicleDto.vehicleModel;
    return this.vehicleRepository.save(vehicle);
  }

  remove(id: number) {
    return this.vehicleRepository.delete(id);
  }
}
