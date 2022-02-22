import { BookingsRepository } from './bookings.repository';
export declare class BookingsService {
    private bookRepo;
    constructor(bookRepo: BookingsRepository);
    getAllBookings(): Promise<import("../../Entities/bookings.entity").Bookings[]>;
    addBooking(booking: any): Promise<any>;
    getBookingById(id: any): Promise<import("../../Entities/bookings.entity").Bookings>;
    updateBooking(id: any, bookingObj: any): Promise<import("typeorm").UpdateResult>;
    removeBooking(Id: number): Promise<void>;
}
