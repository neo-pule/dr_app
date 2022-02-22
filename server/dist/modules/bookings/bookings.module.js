"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsModule = void 0;
const common_1 = require("@nestjs/common");
const bookings_controller_1 = require("./bookings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bookings_repository_1 = require("./bookings.repository");
const bookingStatus_repository_1 = require("./bookingStatus.repository");
const bookingType_repository_1 = require("./bookingType.repository");
const bookings_service_1 = require("./bookings.service");
let BookingsModule = class BookingsModule {
};
BookingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bookings_repository_1.BookingsRepository, bookingStatus_repository_1.BookingStatusRepository, bookingType_repository_1.BookingTypeRepository])],
        controllers: [bookings_controller_1.BookingsController],
        providers: [bookings_service_1.BookingsService]
    })
], BookingsModule);
exports.BookingsModule = BookingsModule;
//# sourceMappingURL=bookings.module.js.map