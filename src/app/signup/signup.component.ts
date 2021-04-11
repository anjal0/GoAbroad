import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:'',
    password:''
  }

  regex = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,30})')
  mail = new RegExp('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    if(this.regex.test(this.user.password) && this.mail.test(this.user.email) ){
      this.router.navigate(['/login']);
    }
    else{
      alert('Please ente a valid email and password');
    }
  }
}
