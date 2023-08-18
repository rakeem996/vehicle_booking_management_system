import { Booking } from 'src/booking/entities/booking.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wheels: number;

  @Column()
  vehicleType: string;

  @Column()
  vehicleModel: string;

  @OneToMany(() => Booking, (booking) => booking.vehicle)
  bookings: Booking[];

  @ManyToOne(() => User, (user) => user.vehicles)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
