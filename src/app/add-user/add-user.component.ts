import { UserListService } from './../user-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _userListService:  UserListService, private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(event){
    console.log("Add user event ",event)
   let user= this._userListService.getUserByName(event.target.username.value);
   let users=this._userListService.getUserList();
    if(user.length === 0)
        {
          let userObj={};
          userObj["userName"]=event.target.username.value;
          userObj["password"]=event.target.password.value;
          userObj["phone"]=event.target.phone.value;
          userObj["address"]=event.target.address.value;
          userObj["role"]=event.target.role.value;
          userObj["id"]=users.length+1;

          this._userListService.addUser(userObj);
          window.alert("User created successfully")
          this.router.navigate(['home']);
          console.log(event.target.username.value);
        }

      else{
        window.alert('Username alreday available !!!')
      }
    


  }
}
