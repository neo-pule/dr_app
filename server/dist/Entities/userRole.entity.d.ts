import { BaseEntity } from "typeorm";
import { Role } from "./role.entity";
import { User } from "./user.entity";
export declare class UserRole extends BaseEntity {
    id: number;
    role_id: Role;
    user_role_id: User;
}
