import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
import { BookingStatus } from './bookingstatus.entity';
import { BookingType } from './bookingtype.entity';
export declare class Bookings extends BaseEntity {
    id: number;
    userId: string;
    date: Date;
    docId: string;
    description: string;
    statusId: BookingStatus;
    bookingTypeId: BookingType;
    users: User[];
}
