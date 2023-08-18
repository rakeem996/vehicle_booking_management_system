import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking: Booking = new Booking();
    booking.vehicle = createBookingDto.vehicle;
    booking.bookingDate = createBookingDto.bookingDate;
    return this.bookingRepository.save(booking);
  }

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  findOne(id: number) {
    return this.bookingRepository.findOne({ where: { id } });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking: Booking = new Booking();
    booking.vehicle = updateBookingDto.vehicle;
    booking.bookingDate = updateBookingDto.bookingDate;
    booking.id = id;
    return this.bookingRepository.save(booking);
  }

  remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}
