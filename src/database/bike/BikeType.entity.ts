import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehicle } from '../vehicle/Vehicle.entity';

@Entity()
export class BikeType {
  @PrimaryGeneratedColumn()
  bike_type_id: number;

  @Column()
  name: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.bikeType)
  vehicles: Vehicle[];
}
