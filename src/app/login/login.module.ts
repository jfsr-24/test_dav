import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from '../appmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
