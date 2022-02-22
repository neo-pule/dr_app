import { User } from 'src/Entities/user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<User[]>;
    getUserById(id: any): Promise<User>;
    getUserByEmail(mail: any): Promise<User | {
        status: number;
        msg: string;
    }>;
    updateUser(id: any, userObj: any): Promise<import("typeorm").UpdateResult>;
    removeUser(Id: number): Promise<void>;
}
