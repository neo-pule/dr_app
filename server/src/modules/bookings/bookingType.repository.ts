import { BookingType } from "../../Entities/bookingtype.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(BookingType)
export class BookingTypeRepository extends Repository<BookingType> {}