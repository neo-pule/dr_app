import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingsService } from 'src/service/bookings.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.page.html',
  styleUrls: ['./update-appointment.page.scss'],
})
export class UpdateAppointmentPage implements OnInit {


  @Input() appointment: { value: { itemName: any; itemDueDate: any; itemPriority: any; itemCategory: any; }; key: any; };
  categories =[]
  categorySelectedCategory: any;

  newAppointmentObj = {}
  itemName: any;
  itemContacts: number;
  itemDueDate: any;
  itemPriority: any;
  itemCategory: any;

  constructor(public modalCtlr:ModalController, private book : BookingsService) { }

  ngOnInit() {
    
  }
  selectCategory(index: string | number){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  updateBooking(bookingObj:any,index : number){
    this.book.updateBooking(bookingObj,index);
  }
}