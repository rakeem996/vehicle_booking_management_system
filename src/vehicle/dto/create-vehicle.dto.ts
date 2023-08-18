import { User } from 'src/user/entities/user.entity';

export class CreateVehicleDto {
  user: User;
  wheel: number;
  vehicleType: string;
  vehicleModel: string;
}
