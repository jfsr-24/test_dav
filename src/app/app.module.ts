import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './appmaterial.module';
import { ActividadComponent } from './dashboard/actividad/actividad.component';
import { ActividadModule } from './dashboard/actividad/actividad.module';

import * as firebase from "firebase";

// Inicializando Firebase
var config = {
  apiKey: "AIzaSyDtygpIEvOkWmskWfcNop6PvI68BpYmJ3Q",
  authDomain: "test-davinci.firebaseapp.com",
  databaseURL: "https://test-davinci.firebaseio.com",
  projectId: "test-davinci",
  storageBucket: "test-davinci.appspot.com",
  messagingSenderId: "578062545757"
};
firebase.initializeApp(config);

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'actividad',
        component: ActividadComponent
      }
    ]

  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    ActividadModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
