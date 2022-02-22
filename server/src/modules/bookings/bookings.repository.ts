import { Bookings } from "../../Entities/bookings.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Bookings)
export class BookingsRepository extends Repository<Bookings> {}