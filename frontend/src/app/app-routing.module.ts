import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { AuthService } from 'src/service/auth.service';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthService],
  },
  {
    path:'tab1',
    loadChildren: () =>import('../app/tab1/tab1-routing.module').then(m=>m.Tab1PageRoutingModule)
  },
  {
    path: 'add-new-appointment',
    loadChildren: () => import('./add-new-appointment/add-new-appointment.module').then( m => m.AddNewAppointmentPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'update-appointment',
    loadChildren: () => import('./update-appointment/update-appointment.module').then( m => m.UpdateAppointmentPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
  // {
  //   path: 'update-appointment',
  //   loadChildren: () => import('./update-appointment/update-appointment.module').then( m => m.UpdateAppointmentPageModule)
  // }
    path: 'add-user',
    loadChildren: () => import('./pages/admin/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/admin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/client/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'admin-homepage',
    loadChildren: () => import('./admin-homepage/admin-homepage.module').then( m => m.AdminHomepagePageModule)
  },
  {
    path: 'admin-update/:id',
    loadChildren: () => import('./pages/admin/users/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
