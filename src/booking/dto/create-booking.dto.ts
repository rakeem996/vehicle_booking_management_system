import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

export class CreateBookingDto {
  vehicle: Vehicle;
  bookingDate: Date;
}
