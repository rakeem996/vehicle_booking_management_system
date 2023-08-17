import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehicle } from '../vehicle/Vehicle.entity';

@Entity()
export class CarType {
  @PrimaryGeneratedColumn()
  carTypeId: number;

  @Column()
  name: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.carType)
  vehicles: Vehicle[];
}
