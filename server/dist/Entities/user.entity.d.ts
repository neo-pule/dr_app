import { BaseEntity } from "typeorm";
import { UserRole } from "./userRole.entity";
export declare class User extends BaseEntity {
    id: number;
    uuid: string;
    user_role_id: string;
    email: string;
    firstname: string;
    phone: string;
    emailVerified: string;
    password: string;
    profileComplete: string;
    last_login: Date;
    created_at: Date;
    isActive: string;
    userRole: UserRole;
}
