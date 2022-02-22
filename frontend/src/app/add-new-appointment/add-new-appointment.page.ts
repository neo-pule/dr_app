import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingsService } from 'src/service/bookings.service';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.page.html',
  styleUrls: ['./add-new-appointment.page.scss'],
})
export class AddNewAppointmentPage implements OnInit {

  categories =[]
  categorySelectedCategory: any;

  newAppointmentObj = {};
  itemName: any;
  itemContacts: number;
  itemDueDate: any ;
  itemPriority: any;
  itemCategory: any;


  constructor(public modalCtlr: ModalController, private book : BookingsService) {

   }

  ngOnInit() {
  }
  
  async add(){
    var booking = {
      // id: 1,
      userId: "93101e96-3dc4-4e41-a57a-6e3ab1840b2c",
      date: this.itemDueDate,//"2020-10-10",
      docId: "77f610a6-d615-458b-a268-a878581ca448",
      description: this.itemName
    }
    this.book.addBooking(booking);
    this.dismis()
  }
  


  selectCategory(index: string | number){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newAppointmentObj);
  }

  close()
  {
    this.itemDueDate.cancel();
  }
}