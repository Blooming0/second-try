import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
    imports: [],
    exports:[],
    controllers: [BookingController],
    providers: [BookingService],
  })
export class BookingModule {}
