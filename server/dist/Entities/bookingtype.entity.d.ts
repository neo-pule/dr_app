import { BaseEntity } from "typeorm";
export declare class BookingType extends BaseEntity {
    id: number;
    name: string;
    description: string;
    active: boolean;
}
