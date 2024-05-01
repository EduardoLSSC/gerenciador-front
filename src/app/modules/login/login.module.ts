import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewUserComponent } from './new-user/new-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    NewUserComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class LoginModule { }
