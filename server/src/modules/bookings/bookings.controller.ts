import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {


    constructor(private bookService : BookingsService) { }

    @Post('/')
    async add(@Body() booking: any) {
        return await this.bookService.addBooking(booking);
    }

    @Get('/')
    async getAllUsers() {
        return await this.bookService.getAllBookings();
    }
    @Patch('/:id')
    async updateUser(@Param('id') id : number,@Body() booking: any){
        this.bookService.updateBooking(id,booking);
    }
    @Delete('/:id')
    async removeUser(id : number) {
        return await this.bookService.removeBooking(id);
    }
}
