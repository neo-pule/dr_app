import { BaseEntity } from "typeorm";
export declare class BookingStatus extends BaseEntity {
    id: number;
    name: string;
    description: string;
    active: boolean;
}
