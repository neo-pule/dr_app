"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const user_dto_1 = require("../user/user.dto");
const user_repository_1 = require("../user/user.repository");
let AuthService = class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async addUser(user) {
        try {
            console.log(user);
            user.password = bcrypt.hashSync(user.password, 10);
            console.log(user);
            return await this.userRepo.save(user);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(user) {
        try {
            let isOk = false;
            const userDTO = new user_dto_1.UserDTO();
            userDTO.email = user.email;
            userDTO.password = user.password;
            isOk = true;
            if (isOk) {
                const userDetails = await this.userRepo.findOne({
                    email: user.email,
                });
                if (userDetails == null) {
                    return { status: 401, msg: 'Invalid credentials' };
                }
                const isValid = bcrypt.compareSync(user.password, userDetails.password);
                console.log(user.email + " " + Date() + " bcrypt.compareSync " + isValid);
                if (isValid) {
                    return {
                        status: 200,
                        msg: {
                            email: user.email,
                            msg: "Access Granted",
                        },
                    };
                }
                else {
                    return { status: 401, msg: 'Invalid credentials' };
                }
            }
            else {
                return { status: 400, msg: 'Invalid fields.' };
            }
        }
        catch (err) {
            throw err;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map