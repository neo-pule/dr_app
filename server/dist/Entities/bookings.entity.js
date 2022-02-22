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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookings = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bookingstatus_entity_1 = require("./bookingstatus.entity");
const bookingtype_entity_1 = require("./bookingtype.entity");
let Bookings = class Bookings extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'unique key identifier'
    }),
    __metadata("design:type", Number)
], Bookings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], Bookings.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date'
    }),
    __metadata("design:type", Date)
], Bookings.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], Bookings.prototype, "docId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], Bookings.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bookingstatus_entity_1.BookingStatus, statusID => statusID.id),
    __metadata("design:type", bookingstatus_entity_1.BookingStatus)
], Bookings.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bookingtype_entity_1.BookingType, bookId => bookId.id),
    __metadata("design:type", bookingtype_entity_1.BookingType)
], Bookings.prototype, "bookingTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Bookings.prototype, "users", void 0);
Bookings = __decorate([
    (0, typeorm_1.Entity)('bookings')
], Bookings);
exports.Bookings = Bookings;
//# sourceMappingURL=bookings.entity.js.map