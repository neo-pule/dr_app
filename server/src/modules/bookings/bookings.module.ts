import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsRepository } from './bookings.repository';
import { BookingStatusRepository } from './bookingStatus.repository';
import { BookingTypeRepository } from './bookingType.repository';
import { BookingsService } from './bookings.service';
@Module({
    imports: [TypeOrmModule.forFeature([BookingsRepository,BookingStatusRepository,BookingTypeRepository])],
  controllers: [BookingsController],
  providers :[BookingsService]
})
export class BookingsModule {}
