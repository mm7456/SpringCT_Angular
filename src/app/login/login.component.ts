import { UserListService } from './../user-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _userListService:UserListService ,private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted  =  false;
  
  ngOnInit(): void {

    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get formControls() { return this.loginForm.controls; }


  login(){
   // console.log(event);
 
    console.log(this.loginForm.value);
    let username=this.loginForm.get('username').value;
    let password=this.loginForm.get('password').value;
    //console.log(username);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    let user=this._userListService.getUserByName(username)
   // console.log(user[0].userName);
   if(user.length == 0) {
    window.alert("Wronge username or password!!!")
   }
    else 
    if(password===user[0].password){
      sessionStorage.setItem("user",username)
      
      this.router.navigate(["/home"]);
    }
    else
    window.alert("Wronge username or password !!!")
    
  }

}
