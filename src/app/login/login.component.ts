import { UserListService } from './../user-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _userListService:UserListService ) { }

  ngOnInit(): void {
  }

  login(event,username,password){
    console.log(event);
    console.log(username);
    let user=this._userListService.getUserByName(username)
   // console.log(user[0].userName);
   if(user.length == 0) {
    window.alert("Wronge username or password !!!")
   }
    else if(password===user[0].password){
      sessionStorage.setItem("user",username)
      
      this.router.navigate(["/home"]);
    }
    else
    window.alert("Wronge username or password !!!")
    
  }

}
