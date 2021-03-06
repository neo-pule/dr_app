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
exports.BookingType = void 0;
const typeorm_1 = require("typeorm");
let BookingType = class BookingType extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'unique key identifier'
    }),
    __metadata("design:type", Number)
], BookingType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], BookingType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], BookingType.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bit'
    }),
    __metadata("design:type", Boolean)
], BookingType.prototype, "active", void 0);
BookingType = __decorate([
    (0, typeorm_1.Entity)('bookingType')
], BookingType);
exports.BookingType = BookingType;
//# sourceMappingURL=bookingtype.entity.js.map