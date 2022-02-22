import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserRoleRepository } from './userRole.repository';
import { RoleRepository } from './role.repository';
import { UserService } from './user.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,RoleRepository,UserRoleRepository])],
    controllers: [UserController],
    providers:[UserService]
  })
export class UserModule {}
