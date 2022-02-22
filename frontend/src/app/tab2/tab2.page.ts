import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BookingsService } from 'src/service/bookings.service';
import { AddNewAppointmentPage } from '../add-new-appointment/add-new-appointment.page';
import { UpdateAppointmentPage } from '../update-appointment/update-appointment.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  todoList = [];
  
  today: number = Date.now();

  bookings : any;
  constructor(public modalCtlr: ModalController, private book : BookingsService) { 
    // this.getAllAppointment()
  }
 async getAllBookings(){
    this.book.getAllBookings().subscribe((data) => {
    this.bookings = data;
    console.log(this.bookings)
    })
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewAppointmentPage,
    })
    modal.onDidDismiss().then(newAppointment =>{
      // this.getAllAppointment();
    })
    return await modal.present();
  }

  removeBooking(id:number){
    console.log("******")
    this.book.removeBooking(id);

  }
  async update(selectedAppointment: any){
    const modal = await this.modalCtlr.create({
      component: UpdateAppointmentPage,
      componentProps: {appointment: selectedAppointment}
    })

    modal.onDidDismiss().then(()=>{
      // this.getAllAppointment()
    })
    
    return await modal.present()
  }
  
  ngOnInit() {
    this.getAllBookings();
  }
}