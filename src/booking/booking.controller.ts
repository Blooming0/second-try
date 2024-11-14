import { Controller,Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')//bookingاي رابط داخل هذا لازم يبدأ ب 
//ex:    localhost:3000/booking/popo
export class BookingController {
    constructor(private readonly bookingService:BookingService){}//private readonly ؟؟
    @Get("/popo")
    test(){
        return this.bookingService.test();
    }
}
