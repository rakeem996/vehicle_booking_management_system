import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { CarType } from '../car/CarType.entity';
import { BikeType } from '../bike/BikeType.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  vehicle_id: number;

  @ManyToOne(() => CarType)
  @JoinColumn({ name: 'type_id' })
  carType: CarType;

  @ManyToOne(() => BikeType)
  @JoinColumn({ name: 'type_id' })
  bikeType: BikeType;

  @Column()
  name: string;
}
