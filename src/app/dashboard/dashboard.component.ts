import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = '';
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  gotoSection(sec:string){
    console.log('go to'+sec);
    this.router.navigate(['./dashboard/'+sec]); //Redirect to route
  }

  logout(){
    this.router.navigate(['./login']);
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      
    }, function(error) {
      console.error('Sign Out Error', error);
    });
    
  }

}
