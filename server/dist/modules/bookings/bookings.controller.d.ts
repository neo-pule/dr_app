import { BookingsService } from './bookings.service';
export declare class BookingsController {
    private bookService;
    constructor(bookService: BookingsService);
    add(booking: any): Promise<any>;
    getAllUsers(): Promise<import("../../Entities/bookings.entity").Bookings[]>;
    updateUser(id: number, booking: any): Promise<void>;
    removeUser(id: number): Promise<void>;
}
