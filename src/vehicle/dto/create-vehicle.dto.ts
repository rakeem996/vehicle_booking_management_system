import { IsNotEmpty, IsObject, IsString, IsNumber } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateVehicleDto {
  @IsObject()
  @IsNotEmpty()
  user: User;

  @IsNumber()
  @IsNotEmpty()
  wheel: number;

  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsString()
  @IsNotEmpty()
  vehicleModel: string;
}
