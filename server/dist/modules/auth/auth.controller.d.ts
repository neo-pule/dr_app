import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    login(user: any, res: Response): Promise<Response<any, Record<string, any>>>;
    add(user: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
