import { UserListService } from './../user-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _userListService:  UserListService) { }
userList=[];
  ngOnInit(): void {

    this.userList= this._userListService.getUserList();

  }
 
  getRole(){
    return this._userListService.getUserByName(sessionStorage.getItem("user"))[0]["role"];
    
  }




}
