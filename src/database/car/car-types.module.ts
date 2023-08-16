import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarType } from './CarType.entity';
import { CarTypesController } from './car-types.controller';
import { CarTypesService } from './car-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarType])],
  controllers: [CarTypesController],
  providers: [CarTypesService],
})
export class CarTypesModule {}
