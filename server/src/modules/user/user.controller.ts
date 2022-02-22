import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
@Controller('user')
export class UserController {

    constructor(private user: UserService) { }

    // @Post('/')
    // async add(@Body() user: any) {
    //     return await this.user.addUser(user);
    // }

    @Get('/')
    async getAllUsers() {
        return await this.user.getAllUsers();
    }
    @Post('/email')
    async getUserByEmail(@Body() mail: any, @Res() res: Response) {
        const response = await this.user.getUserByEmail(mail);
        console.log(response);
        return res.json(response);
    }
    @Get('/:id')
    async getUserById(@Param('id') id : number) {
        return await this.user.getUserById(id);
    }
    @Put('/:id')
    async updateUser(@Param('id') id : number,@Body() user: any){
        this.user.updateUser(id,user);
    }
    @Delete('/:id')
    async removeUser(id : number) {
        return await this.user.removeUser(id);
    }
  
}
