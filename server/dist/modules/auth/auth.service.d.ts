import { UserRepository } from '../user/user.repository';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: UserRepository);
    addUser(user: any): Promise<any>;
    login(user: any): Promise<{
        status: number;
        msg: string;
    } | {
        status: number;
        msg: {
            email: any;
            msg: string;
        };
    }>;
}
