import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingDate: Date;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.bookings)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;
}
