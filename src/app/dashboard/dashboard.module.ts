import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../appmaterial.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
