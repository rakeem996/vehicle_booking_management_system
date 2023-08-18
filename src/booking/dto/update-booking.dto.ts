import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  vehicle: Vehicle;
  bookingDate: Date;
}
