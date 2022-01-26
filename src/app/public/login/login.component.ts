import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../register/register.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(
     private formBuilder: FormBuilder,
     private http: HttpClient
     ) {

   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        email: '',
        password: ''
    });
  }

  submit ():void {
    this.http.post('/api/auth/login', this.form.getRawValue(),{withCredentials: true})
      .subscribe({next: result => console.log(result),
        error: error =>console.log(error)});

  }

}
