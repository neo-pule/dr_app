import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingsRepository } from './bookings.repository';

@Injectable()
export class BookingsService {

    constructor(@InjectRepository(BookingsRepository) private bookRepo: BookingsRepository){}

    async getAllBookings() {
        return await this.bookRepo.find({ select: 
          ['id','userId','description','bookingTypeId','date','statusId','docId'] });
    }

    async addBooking(booking: any) {
        
        try{
            console.log(booking)
            return await this.bookRepo.save(booking);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }
    async getBookingById(id :any){
     
        const booking = await this.bookRepo.findOne(id);
        if (!booking) {
            throw new NotFoundException(`Booking #${id} not found`);
        }
        return booking;
    }
    async updateBooking(id : any, bookingObj : any){
        const booking = await this.bookRepo.findOne(id);
        if (!booking) {
            throw new NotFoundException(`Booking #${id} not found`);
        }
        return await this.bookRepo.update(id,bookingObj);
    }
    async removeBooking(Id: number){
        const booking = await this.bookRepo.findOne(Id);
        if (!booking) {
            throw new NotFoundException(`Booking #${Id} not found`);
        }
        await this.bookRepo.remove(booking);
    } 

}
