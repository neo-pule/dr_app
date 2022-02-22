import { BookingStatus } from "../../Entities/bookingstatus.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(BookingStatus)
export class BookingStatusRepository extends Repository<BookingStatus> {}