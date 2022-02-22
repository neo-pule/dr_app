import { UserRole } from "../../Entities/userRole.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {}