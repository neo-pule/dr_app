import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../../../../service/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  loadedUser: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private route: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {

      const userId = paramMap.get('id');
      // this.loadedUser = this.usersService.getUser(userId);
      console.log(userId);
    });
  }

  deactivate(){
    alert("Are you sure you want disable account?");
    this.route.navigateByUrl('users');
    
  }
  // onDeleteUser() {
  //   this.alertCtrl
  //     .create({
  //       header: 'Are you sure?',
  //       message: 'Do you really want to delete the user?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //         },
  //         {
  //           text: 'Delete',
  //           handler: () => {
  //             this.usersService.deleteUser(this.loadedUser.id);
  //             console.log(this.loadedUser);
  //             this.router.navigate(['/users']);
  //           },
  //         },
  //       ],
  //     })
  //     .then((alertEl) => {
  //       alertEl.present();
  //     });
  // }
}
