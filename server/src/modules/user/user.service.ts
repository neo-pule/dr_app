import { ConsoleLogger, Get, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { User } from 'src/Entities/user.entity';
import { UserDTO } from './user.dto';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {

    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository) { }
    async getAllUsers() {
        return await this.userRepo.find({ select: 
        ['firstname', 'last_login', 'email', 'phone', 'password', 'last_login', 'profileComplete', 'user_role_id', 
        'created_at', 'emailVerified', 'isActive'] });
    }

    // async addUser(user: any) {
        
    //     try{
    //         console.log(user)
    //         user.password = bcrypt.hashSync(user.password, 10);
    //         console.log(user)
    //         return await this.userRepo.save(user);
    //      }
    //      catch(err){
    //         throw new HttpException(err, HttpStatus.BAD_REQUEST);
    //      }
    // }
    async getUserById(id :any){
     
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async getUserByEmail(mail :any){
        const userDetails = await this.userRepo.findOne({
            email: mail.email,
        });
        if (userDetails == null) {
            return { status: 401, msg: 'Invalid email' };
        }
        return userDetails;
    }
    async updateUser(id : any, userObj : any){
        // console.log(userObj+" "+id)
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return await this.userRepo.update(id,userObj);
    }
    async removeUser(Id: number){
        const user = await this.userRepo.findOne(Id);
        if (!user) {
            throw new NotFoundException(`User #${Id} not found`);
        }
        await this.userRepo.remove(user);
    } 


}