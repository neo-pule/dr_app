import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import * as bcrypt from 'bcrypt';
import { UserDTO } from '../user/user.dto';
import { UserRepository } from '../user/user.repository';
@Injectable()
export class AuthService {


    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository) { }

    async addUser(user: any) {

        try {
            console.log(user)
            user.password = bcrypt.hashSync(user.password, 10);
            console.log(user)
            return await this.userRepo.save(user);
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }

    async login(user: any) {
        try {

            let isOk = false;
            // alert(user)
            const userDTO = new UserDTO();
            userDTO.email = user.email;
            userDTO.password = user.password;

            // Validate DTO against validate function from class-validator
            // await validate(userDTO).then((errors) => {
            //     if (errors.length > 0) {
            //       console.log('error in req body')
            //     } else {
            //       isOk = true;
            //     }
            //   });
            isOk = true;
            if (isOk) {
                // Get user information
                const userDetails = await this.userRepo.findOne({
                    email: user.email,
                });
                if (userDetails == null) {
                    return { status: 401, msg: 'Invalid credentials' };
                }
                const isValid = bcrypt.compareSync(user.password, userDetails.password);
                console.log(user.email+" "+Date()+" bcrypt.compareSync "+isValid);
                if (isValid) {
                    return {
                        status: 200,
                        msg: {
                            email: user.email,
                            msg: "Access Granted",//this.jwtService.sign({ email: user.email }),
                        },
                    };
                } else {
                    return { status: 401, msg: 'Invalid credentials' };
                }
            } else {
                return { status: 400, msg: 'Invalid fields.' };

            }
        }
        catch (err) {
            throw err
        }
    }
}
