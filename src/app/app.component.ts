import { Component, AfterViewInit, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { 
    // this.router.navigate(['/login']); //Redirect to LoginComponent
  }

  ngOnInit() {

    // llamar en Can activate de Dashboard
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log('No se ha logueado, Por favor logueese');
        this.router.navigate(['/login'])
      }else{
        console.log('Bienvenido, nuevamente');
      }
      
    });
  }

  title = 'app';
}


