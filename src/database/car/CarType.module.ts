import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarType } from './CarType.entity';
import { CarTypeServices } from './CarType.service';
import { CarTypeController } from './dto/carType.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarType])],
  controllers: [CarTypeController],
  providers: [CarTypeServices],
})
export class CarTypesModule {}
