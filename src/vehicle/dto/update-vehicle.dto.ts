import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { User } from 'src/user/entities/user.entity';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  user: User;
  wheel: number;
  vehicleType: string;
  vehicleModel: string;
}
