import { BaseEntity } from "typeorm";
import { UserRole } from "./userRole.entity";
export declare class Role extends BaseEntity {
    id: number;
    name: string;
    description: string;
    active: boolean;
    roleId: UserRole;
}
