import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class UserListService{

    user_list=[
        {
            id:1,
            userName:"Mahesh",
            password:"mahesh123",
            phone:8983745516,
            role:"admin",
            address:"Pune"
        },
        {
            id:2,
            userName:"abc",
            password:"abc123",
            phone:8983745517,
            role:"normal",
            address:"Mumbai"
        },
        {
            id:3,
            userName:"xyz",
            password:"xyz23",
            phone:8983745518,
            role:"normal",
            address:"Chennai"
        }

    ];

    getUserList(){
        return this.user_list;
    }

    getUserByName(username){
        return this.user_list.filter(a => a.userName === username);
    }

    addUser(data){
     
            this.user_list.push(data);
        
    }



}