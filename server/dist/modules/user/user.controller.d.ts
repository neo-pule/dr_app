import { UserService } from './user.service';
import { Response } from 'express';
export declare class UserController {
    private user;
    constructor(user: UserService);
    getAllUsers(): Promise<import("../../Entities/user.entity").User[]>;
    getUserByEmail(mail: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getUserById(id: number): Promise<import("../../Entities/user.entity").User>;
    updateUser(id: number, user: any): Promise<void>;
    removeUser(id: number): Promise<void>;
}
