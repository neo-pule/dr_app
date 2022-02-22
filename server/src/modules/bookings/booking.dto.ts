import { IsDate,isInt, isString, IsString } from 'class-validator';

export class BookingDTO {
  @IsString()
  email: string;
  @IsString()
  password: string;
}