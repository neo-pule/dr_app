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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bookings_repository_1 = require("./bookings.repository");
let BookingsService = class BookingsService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async getAllBookings() {
        return await this.bookRepo.find({ select: ['id', 'userId', 'description', 'bookingTypeId', 'date', 'statusId', 'docId'] });
    }
    async addBooking(booking) {
        try {
            console.log(booking);
            return await this.bookRepo.save(booking);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getBookingById(id) {
        const booking = await this.bookRepo.findOne(id);
        if (!booking) {
            throw new common_1.NotFoundException(`Booking #${id} not found`);
        }
        return booking;
    }
    async updateBooking(id, bookingObj) {
        const booking = await this.bookRepo.findOne(id);
        if (!booking) {
            throw new common_1.NotFoundException(`Booking #${id} not found`);
        }
        return await this.bookRepo.update(id, bookingObj);
    }
    async removeBooking(Id) {
        const booking = await this.bookRepo.findOne(Id);
        if (!booking) {
            throw new common_1.NotFoundException(`Booking #${Id} not found`);
        }
        await this.bookRepo.remove(booking);
    }
};
BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bookings_repository_1.BookingsRepository)),
    __metadata("design:paramtypes", [bookings_repository_1.BookingsRepository])
], BookingsService);
exports.BookingsService = BookingsService;
//# sourceMappingURL=bookings.service.js.map