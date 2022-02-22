import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '../user/role.repository';
import { UserRepository } from '../user/user.repository';
import { UserRoleRepository } from '../user/userRole.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,RoleRepository,UserRoleRepository])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
