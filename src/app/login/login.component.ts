import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(
    private fb: FormBuilder,         
    private router:Router

  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {

      console.log('loggued success',this.form.value);

      firebase.auth().signInWithEmailAndPassword(this.form.value.userName, this.form.value.password).then(data => {
          // console.log('exito', data);
          localStorage.setItem('user', data.user.email);
          this.router.navigate(['/dashboard/actividad'])
        }, err => {
          // console.log('Error', err);
          alert(err.message);
        })
    }
    this.formSubmitAttempt = true;             
  }

}

