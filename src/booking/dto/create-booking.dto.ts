import { IsObject, IsNotEmpty } from 'class-validator';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

export class CreateBookingDto {
  @IsObject()
  @IsNotEmpty()
  vehicle: Vehicle;

  @IsObject()
  @IsNotEmpty()
  bookingDate: Date;
}
