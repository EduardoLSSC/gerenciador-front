import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './modules/login/new-user/new-user.component';
import { ForgotPasswordComponent } from './modules/login/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'new-user', component: NewUserComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
